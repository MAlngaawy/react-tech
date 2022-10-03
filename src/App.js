import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAC-e0Tb83fq7qkZN1YS8-aOhb2x5zVow",
  authDomain: "learn-7129e.firebaseapp.com",
  projectId: "learn-7129e",
  storageBucket: "learn-7129e.appspot.com",
  messagingSenderId: "37521678911",
  appId: "1:37521678911:web:07950313fda4d111f5ce8a",
  measurementId: "G-C04BHK2317",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log(auth);

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
