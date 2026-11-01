import db from '../../../../db/db.config.js'
export async function createConversationService(question) {
try {

    // validation
    if(!question.trim()) {
        const error = new Error('question is required')
        error.status = 400
        throw error
    }

    // save to db
    
    await db.execute('INSERT INTO conversation (content) VALUES(?)', [
        question,
    ])
   

    return `chat saved to db with question: ${question}`
}  catch (error) {
    throw error
 } 
}
