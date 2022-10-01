
// import React, { useState } from 'react';
// import Chatbot from 'react-chatbot-kit'
// import './App.css';

// import ActionProvider from './ActionProvider';
// import MessageParser from './MessageParser';
// import config from './config';

// import { Layout } from 'antd';

// import { changeColor } from './main';

// const { Header, Footer, Sider, Content } = Layout;

// function App() {
//   const [showBot, toggleBot] = useState(false);

//   const saveMessages = (messages, HTMLString) => {
//     localStorage.setItem('chat_messages', JSON.stringify(messages));
//   };

//   const loadMessages = () => {
//     const messages = JSON.parse(localStorage.getItem('chat_messages'));
//     return messages;
//   };

//   console.log(loadMessages())

//   return (

//     <div className="App">
//       <header className="App-header">
//         {showBot && (
//           <Chatbot
//             config={config}
//             headerText='NASA Assess Bot (3 Questions)'
//             actionProvider={ActionProvider}
//             messageHistory={loadMessages()}
//             messageParser={MessageParser}
//             saveMessages={saveMessages}
//           />
//         )}
//       </header>
//       <button onClick={changeColor}>
//         Change color
//       </button>
//       <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
//     </div>

//   );
// }

// export default App