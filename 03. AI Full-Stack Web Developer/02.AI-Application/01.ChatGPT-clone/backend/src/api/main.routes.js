import express from 'express'
const mainRouter = express.Router()

// /api/chat
mainRouter.use('/chat', chatRouter)

// /api/admin
// mainRouter.use('/admin', chatRouter)

export default mainRouter