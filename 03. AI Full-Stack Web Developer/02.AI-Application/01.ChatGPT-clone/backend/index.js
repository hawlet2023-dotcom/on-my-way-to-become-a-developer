import express from 'express'
import db from './db/db.config.js'
const app = express()

 async function startServer(){
    try {
    app.listen(3777, err  => {
        if (err) {
            throw err
        }
    console.log('Server is running on port http://localhost:3777')
  })
} catch (error) {
    console.error('Error starting server:', error)
  }
}
  
startServer()