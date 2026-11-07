import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import ChatHeader from './components/ChatHeader/ChatHeader';
import MessageList from './components/MessageList/MessageList';
import ChatInput from './components/ChatInput/ChatInput';


const API_BASE_URL = 'http://localhost:3888/api'; // match your backend port

function App() {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastmessageRef = useRef(null);

  async function fetchConversations() {
    try {
      const response = await axios.get(`${API_BASE_URL}/chat/conversations`);
      const fetchedData = response.data?.data?.conversations || response.data?.data;
      setConversations(Array.isArray(fetchedData) ? fetchedData : []);
    } catch (error) {
      console.error('Error fetching conversations:', error);
      setConversations([]);
    }
  }

  async function handleSubmit(question) {
    if (!question.trim()) return;

    const tempQuestion = {
      id: Date.now(),
      content: question.trim(),
      role: 'user',
    };
    setConversations((prev) => [...prev, tempQuestion]);

    try {
      setIsLoading(true);
      const { data } = await axios.post(`${API_BASE_URL}/chat/conversations`, {
        question: question.trim(),
      });
      const reply = data?.data?.assistantConversation;
      if (reply) {
        setConversations((prev) => [...prev, reply]);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    lastmessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations, isLoading]);

  return (
    <div className='app'>
      <Sidebar />
      <main className='main'>
        <ChatHeader />
        <MessageList
          lastmessageRef={lastmessageRef}
          isLoading={isLoading}
          conversations={conversations}
        />
        <ChatInput isLoading={isLoading} handleSendMessage={handleSubmit} />
      </main>
    </div>
  );
}

export default App;
