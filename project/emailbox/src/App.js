import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./pages/Message";
import SentMessage from "./pages/SentMessage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/mails" element={<Navbar />} />
          <Route path="/mails/:mailId" element={<Message />} />
          <Route path="/mails/sent" element={<SentMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
