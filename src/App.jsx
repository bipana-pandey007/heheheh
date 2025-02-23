import { useState } from 'react'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
const App = () => {
  const[chatHistory,setChatHistory]=useState([]);

  return (
    
      <div className="container">
        <div className= "chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className ="logo-text">Chatbot</h2>
            </div>
            <button
             className="material-symbols-rounded">keyboard_arrow_down</button>
 
          </div>
          <div className ="chat-body"> 
            <div className = "message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                hi there <br/> how can i help you !?           
               </p>
               {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat}/>

               ))}
            </div>
            <div className = "message user-message">
              {/* <p className="message-text"> hi
                         
               </p> */}
               {chatHistory.map((chat, index) => 
                <ChatMessage key={index} chat={chat}/> )}
               </div>
          </div>
            

        </div>
        {/* chat footer */}
        <div className="chat-footer">
           <ChatForm setChatHistory={setChatHistory}/>
      </div>
     </div >
   

  )
}

export default App
