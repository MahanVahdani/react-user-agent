import React from "react";

import { DisplayDataProps, Session } from "../types/UserAgentTypes";

const DisplayData: React.FC<DisplayDataProps> = ({ session }) => {
  const columns = [
    { title: "#", key: "id" },
    { title: "مرورگر", key: "user_agent" },
    { title: "سیستم عامل", key: "user_agent" },
    { title: "کشور", key: "location.country" },
    { title: "آی پی", key: "ip_address" },
    { title: "آخرین فعالیت", key: "login_at" },
    { title: "حذف", key: "delete" },
  ];

  const getItemValue = (item: Session, key: string): string | JSX.Element => {
    const keys: string[] = key.split(".");
    let value: string = "";

    if (keys.length === 0) {
      value = "undif";
    } else if (keys.length === 1) {
      value = item[keys[0]];
    } else {
      value = item[keys[0]][keys[1]];
    }

    return value;
  };

  const handleDelete = (id: number) => {
    console.log(`Delete item with ID ${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {session.map((item: Session, j) => (
            <tr key={j}>
              {columns.map((column, k) => (
                <td key={k}>
                  {column.key === "delete" ? (
                    <button onClick={() => handleDelete(item.id)}>حذف</button>
                  ) : (
                    getItemValue(item, column.key)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
