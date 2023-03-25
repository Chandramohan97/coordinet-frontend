import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignUpPage/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
// import Teamstrength from "./Components/TeamStrength/Teamstrength";
import RadioInputForm from "./Components/RadioInputForm/RadioInputForm";
import TeamStrength from "./pages/TeamStrength/TeamStrength";
import SignUp from "./pages/SignUpPage/SignUp";
import JobRole from "./pages/JobRole/JobRole";
// import EmailVerification from "./pages/EmailVerification/EmailVerification";
// import HomePage from "./pages/Homepage/HomePage";
import App1 from "./Components/KanbanTest/App1";
import StaticTable from "./Components/Table/StaticTable";
import SampleTableDashboard from "./pages/Sample Table DashBoard/SampleTableDashboard";

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/emailVerification" element={<EmailVerification/>} />
        <Route path="/teamStrength" element={<TeamStrength/>} />
        <Route path="/jobRole" element={<JobRole/>} />
      </Routes>
    </Router> */}
    {/* <Sidebar /> */}
    {/* <StaticTable/> */}
    <SampleTableDashboard/>
     {/* <App1/>  */}
       </div>
  );
}

export default App;
