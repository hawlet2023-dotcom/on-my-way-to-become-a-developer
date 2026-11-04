import Sidebar from './components/sidebar/sidebar.jsx'
import ChatHeader from './components/chatHeader/chatHeader.jsx'
function App() {
  return (
    <div className='app'>
      <Sidebar/>
            
      <main className='main'>
        <ChatHeader/>

         { /* messageList */ }

         { /* chatInput */ }
      </main>
    </div>
  )
}

export default App

