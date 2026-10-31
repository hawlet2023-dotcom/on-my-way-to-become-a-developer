import express from'express'
const chatRoutes = express.Router()
import { createConversationController, 
    getConversationsController }
     from './controller/chat.controller.js'
// /api/chat/conversations
    chatRouter.post('/conversation', createConversationController)

    chatRouter.get('/conversations', getConversationsController)

    export default chatRouter