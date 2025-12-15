import './App.css';
import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // App owns the source of truth for liked state
  const [entries, setEntries] = useState(messages);

  const handleToggleLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const likedCount = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>React Chat Log</h1>

        {/* Display total likes */}
        <p>{likedCount} ❤️s</p>
      </header>

      <main>
        <ChatLog entries={entries} onToggleLike={handleToggleLike} />
      </main>
    </div>
  );
};

export default App;
