import React, { useState, useEffect } from "react";

import DisplayData from "./DisplayData";
import { DataFetchingProps, Session } from "../types/UserAgentTypes";

const DataFetching: React.FC<DataFetchingProps> = ({ apiUrl }) => {
  const [data, setData] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login first");
      }

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data?.response?.status === "success") {
        setData(data.response.data.items);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="table-container">
      <DisplayData session={data} />
    </div>
  );
};

export default DataFetching;
