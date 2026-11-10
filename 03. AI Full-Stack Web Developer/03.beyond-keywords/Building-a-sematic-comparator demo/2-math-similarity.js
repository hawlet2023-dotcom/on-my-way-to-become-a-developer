import "dotenv/config" // module
import { GoogleGenAI } from '@google/genai'
const GEMINI_EMBEDDING_MODEL =
 process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001'
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required')
}
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

  // the ruler of ai: cosine similarity
  // this function measures how 'parallel' two vectors are
  // if they point in the same direction, similarity is 1.0 (identical meaning)
  // if they are perpendicular (90 degree), similarity is 0.0 9unrelated
  // if they point in opposite directions, similarity is -1.0 (opposite meaning)


// (A · B) / (‖A‖ × ‖B‖)
function cosineSimilarity(vecA, vecB) {
    // 0.check if the vectors have the same length)
    if (vecA.length !== vecB.length) {
        throw new Error('vectors must have the same length')
    }

      //1. Dot product (muliply maching components and sum)
    let dotProduct = 0
    // 2. Magnitude (length of each vector)
    let magnitudeA = 0
    let magnitudeB = 0

    for(let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i]
        magnitudeA += vecA[i] * vecA[i];
        magnitudeB += vecB[i] * vecB[i];
    }
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB)
   
   // 3. formula: (A . B) / (||A|| * ||B||)

   if (magnitudeA === 0 || magnitudeB === 0) {
    return 0;
   }

    return dotProduct / (magnitudeA * magnitudeB)
}

  async function compareTexts() {
    const text1 = 'what is html in web development?';
    const text2 = 'what is hyper text markup language?'
    const text3 = 'Nairobi is the capitab of kaniya.'

    //generate embedding
    const result1 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text1,
        config: {
           taskType: 'SEMANTIC_SIMILARITY', 
        },
    }) 
    const result2 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text2,
        config: {
           taskType: 'SEMANTIC_SIMILARITY', 
        },
    })    
     const result3 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text3,
        config: {
           taskType: 'SEMANTIC_SIMILARITY', 
        },
    }) 

    const v1 = result1.embeddings[0].values
    const v2 = result2.embeddings[0].values
    const v3 = result3.embeddings[0].values
    
    const v1Andv2 = cosineSimilarity(v1, v2)
    console.log('v1Andv2:',v1Andv2) // v1Andv2: 0.73
    const v1Andv3 = cosineSimilarity(v1, v3)
    console.log('v1Andv3:',v1Andv3) // v1Andv3: 0.471
  }
  compareTexts()