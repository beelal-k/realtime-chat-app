import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings';
import Home from './pages/Home';
import Main_chat from './pages/Main_chat';

function App() {
  return (

    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/main-chat" element={<Main_chat />} />

      </Routes>






    </>
  );
}

export default App;
