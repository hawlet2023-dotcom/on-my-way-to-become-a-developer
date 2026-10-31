import 'dotenv/config'

import express from 'express'
import db from './db/db.config.js'
import mainRouter from './src/api/main.routes.js'

const app = express()

app.use('/api', mainRouter)

// app.post("api/chat/conversations",(req, res) => {
//   res.send('post method')
// })
// app.get("api/chat/conversations",(req, res) => {
//   res.send('post method')
// })


 async function startServer(){
    try {
      const connection  = await db.getConnection()
      connection.release()

    app.listen(3888, err  => {
        if (err) {
            throw err
        }
    console.log('Server is running on port http://localhost:3888')
  })
} catch (error) {
    console.error('Error starting server:', error)
  }
}
  
startServer()