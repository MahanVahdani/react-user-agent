import React from "react";

import DataFetching from "./components/DataFetching";
import { UserAgentProps } from "./types/UserAgentTypes";

const UserAgentPage: React.FC<UserAgentProps> = ({ apiUrl }) => {
  // Retrieve the token from the local storage
  const token = localStorage.getItem("token");

  return (
    <div>
      <h1>Data Fetching Example</h1>
      {token ? (
        <DataFetching apiUrl={apiUrl} />
      ) : (
        <div>Please login to access the data.</div>
      )}
    </div>
  );
};

export default UserAgentPage;
