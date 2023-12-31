import React from "react";

import DataFetching from "./components/DataFetching";
import { UserAgentProps } from "./types/UserAgentTypes";

const UserAgentPage: React.FC<UserAgentProps> = ({ apiUrl }) => {
  // Retrieve the token from the local storage
  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: "20px" }}>
      {token ? (
        <DataFetching apiUrl={apiUrl} />
      ) : (
        <div>Please login to access the data.</div>
      )}
    </div>
  );
};

export default UserAgentPage;
