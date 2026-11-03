import db from '../../../../db/db.config.js'
import {  GoogleGenAI } from '@google/genai'

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite'
 
const geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export const getRecentConversationRows = async (limit = 5) => {
    const normalizedLimit = Number.parseInt(limit, 10)
    const safeLimit =
      Number.isNaN(normalizedLimit) || normalizedLimit <= 0
      ? 20
      : normalizedLimit
  const [rows] = await db.execute (
    `SELECT id, role, content, created_at
    FROM conversation
    ORDER BY id DESC
    LIMIT ${safeLimit}`,
  )    
    return rows.reverse()
}

const generateAssistantAnswer = async ({ historyRows, question }) => {
    // format history for gemini startChat
const formattedHistory = historyRows.map(row => ({
    role:row.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: row.content }],
}))
    const chat = geminiClient.chats.create({
        model: GEMINI_MODEL,
        config: {
            maxOutputTokens:1024,
},
        history: formattedHistory,
    })

    const result = await chat.sendMessage({ message: question })
    console.log(result.usageMetadata.totalTokenCount)
    return { 
        text: result.text,
        totalTokens: result.usageMetadata.totalTokenCount}
}

const getMessageId = async messageId => {
    const [rows] = await db.execute(
        'SELECT id, role, content, token_count, created_at FROM conversation WHERE id = ? LIMIT 1',
        [messageId],
    )
   if (!rows[0]) return null;
   return {
    id: rows[0].id,
    role: rows[0].role,
    content: rows[0].content,
    tokenCount: Number(rows[0].token_count || 0),
    createdAt: rows[0].created_at
   }
}  
export async function createConversationService(question) {
try {

    // validation
    if(!question.trim()) {
        const error = new Error('question is required')
        error.status = 400
        throw error
    }
   // get recent conversations
      const historyRows = await getRecentConversationRows(5);

      // insert new conversation
   const [result] = await db.execute(
    'INSERT INTO conversation (content, role) VALUES(?, "user")', 
    [question],
)
   const { text, totalTokens } = await generateAssistantAnswer({
     historyRows,
    question, 
})
   const [createAssistantMessageResult] = await db.execute(
     'INSERT INTO conversation (role, content, token_count) VALUES (?, ?, ?)',
     ['assistant', text, totalTokens],
   )
const userConversation = await getMessageId(result.insertId)
const assistantConversation = await getMessageId(
    createAssistantMessageResult.insertId)
   return {
        userConversation,
        assistantConversation,
        
        }
}  catch (error) {
    throw error
}
}