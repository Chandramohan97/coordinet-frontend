import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import TeamStrength from "./pages/TeamStrength/TeamStrength";
import JobRole from "./pages/JobRole/JobRole";
import ProjectCreation from "./pages/Sample Table DashBoard/ProjectCreation";
import TaskCreation from "./pages/TaskCreation/TaskCreation";
import ViewingOptions from "./pages/ViewingOptions/ViewingOptions";
import EmailVerification from "./pages/EmailVerification/EmailVerification"


function App() {
  return (
    <div className="App">
      {/* <App1 */}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/emailVerification" element={<EmailVerification/>} />
        <Route path="/teamStrength" element={<TeamStrength/>} />
        <Route path="/jobRole" element={<JobRole/>} />
      </Routes>
    </Router>
    
    {/* <Router >
      <Routes>
        <Route path="/" element={<ProjectCreation/>} />
        <Route path="/taskCreation" element={<TaskCreation/>} />
        <Route path="/viewingOptions" element={<ViewingOptions/>} /> */}
        {/* <Route path="/viewingOption" element={<ViewingOptions/>} /> */}
      {/* </Routes>
    </Router> */}
    {/* <ViewingOptions/> */}
    {/* <TaskCreation/> */}
     {/* <App1/>  */}
       </div>
  );
}

export default App;
