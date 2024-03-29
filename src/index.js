import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { SampleBoard } from "./Components/SampleBoard/SampleBoard";
// import KanbanBoard from "./KanbanBoard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Boards from "./Components/Kanban/Board/Boards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ChakraProvider>
    <ProSidebarProvider>
      {/* <SampleBoard/> */}
      <App />
      {/* <App1 /> */}
      {/* <Boards /> */}
      {/* <SignInWithGoogle/> */}
      {/* <App1/> */}
      {/* <KanbanBoard/> */}
      </ProSidebarProvider>
    </ChakraProvider>

  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
