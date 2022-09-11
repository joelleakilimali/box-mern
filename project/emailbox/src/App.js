import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./pages/Message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/mails" element={<Navbar />} />
          <Route path="/mails/:mailId" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
