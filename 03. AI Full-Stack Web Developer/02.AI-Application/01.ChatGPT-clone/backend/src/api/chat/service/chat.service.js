import db from '../../../../db/db.config.js'
import {  GoogleGenAI } from '@google/genai'

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite'
 
const geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const getRecentConversationRows = async (limit = 5) => {
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
        history: formattedHistory,
    })

    const result = await chat.sendMessage({ message: question })
    console.log(result)
    return result.content
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
   const assistantAnswer = await generateAssistantAnswer({ historyRows, question })
    return {
        // historyRows,
         assistantAnswer,
        }
}  catch (error) {
    throw error
 } 
}
