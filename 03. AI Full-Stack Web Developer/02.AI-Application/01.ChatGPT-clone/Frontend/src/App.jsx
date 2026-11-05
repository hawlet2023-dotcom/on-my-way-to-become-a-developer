import Sidebar from './components/sidebar/sidebar.jsx'
import ChatHeader from './components/chatHeader/chatHeader.jsx'
import MessgeList from './components/MesssageList/MessageList.jsx'
import { useState } from 'react'
import axios from 'axios'
function App() {
  const [conversations, setConversations] = useState([])
  
  async function fetchConversations() {
    try {
 const { data } = await axios.get (
  'http://localhost:3888/api/chat/conversations'
)
setConversations(data.data)
    } catch (error) {
      console.log(error.message)
    }
}

useEffect(() => {
  fetchConversations()
},[])
  return (
    <div className='app'>
      <Sidebar/>
            
      <main className='main'>
        <ChatHeader/>

         <messageList/>

         { /* chatInput */ }
      </main>
    </div>
  )
}

export default App

