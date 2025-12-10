import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

const App = () => {
  // Use the first message to test Wave 1
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>React Chat Log</h1>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry */}
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
