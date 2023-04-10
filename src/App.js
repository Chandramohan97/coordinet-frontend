import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import TeamStrength from "./pages/TeamStrength/TeamStrength";
import JobRole from "./pages/JobRole/JobRole";
import ProjectCreation from "./pages/ProjectCreation/ProjectCreation";
import TaskCreation from "./pages/TaskCreation/TaskCreation";
import ViewingOptions from "./pages/ViewingOptions/ViewingOptions";
import EmailVerification from "./pages/EmailVerification/EmailVerification"
import TableView from "./pages/TableView/TableView";
import SideMenu from "./Components/SideMenu/SideMenu";
import TableDashBoard from "./pages/TableDashBoard/TableDashBoard";

function App() {
  return (
    <div className="App">
      
      {/* ?<TableDashBoard /> */}
      {/* <App1 */} 
     <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          {/* <Route path="/emailVerification" element={<EmailVerification/>} /> */}
          <Route path="/teamStrength" element={<TeamStrength/>} />
          <Route path="/projectCreation" element={<ProjectCreation/>} />
          <Route path="/taskCreation" element={<TaskCreation/>} />
          <Route path="/viewingOptions" element={<ViewingOptions/>} /> 
          <Route path="/tableView" element={<TableView />} />
          <Route path="/tableDashboard" element={<SideMenu />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
