import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
