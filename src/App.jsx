import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // Use the first message to test Wave 1
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Chat Between {messages[0].sender} and {messages[1].sender} </h1>
        <h2> 🤍🤍🤍🤍🤍 </h2>
      </header>

      <main>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
