import { useState } from 'react';
import Homepage from './components/Homepage'; // Import Homepage
import './App.css';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage /> {/* Render the Homepage component here */}
    </>
  );
}

export default App;
