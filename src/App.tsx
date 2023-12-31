import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserAgentPage from "./Pages/UserAgent/UserAgent.page";

function App() {
  return (
    <div className="App">
      <UserAgentPage apiUrl="https://core.aqayepardakht.ir/api/user/profile/sessions" />
    </div>
  );
}

export default App;
