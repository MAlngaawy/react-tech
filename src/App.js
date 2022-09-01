import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
