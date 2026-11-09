import "dotenv/config" // module
import { GoogleGenAI } from '@google/genai'
const GEMINI_EMBEDDING_MODEL =
 process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001'
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required')
}
// 1. initialize the SDK
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

async function generateEmbedding() {
    const text = 'hello,this is test for vector embeding'

    try { 
    //2. generate and call the embedding
   const result = await ai.models.embedContent({
    model:GEMINI_EMBEDDING_MODEL,
    contents: text,
    config: {
        output_dimensionality:768
    }
   }) 
   console.log(result)
   }catch (error) {
    console.error('Error generating embedding:', error)
  }
}

generateEmbedding()
