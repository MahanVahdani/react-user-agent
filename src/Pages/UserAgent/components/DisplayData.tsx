import React from "react";

import { DisplayDataProps, Session } from "../types/UserAgentTypes";
import { translator } from "../../../packages/Translator/translator";
import { timeConverter } from "../../../packages/TimeConverter/timeConvertor";
import browserExtractor from "../../../packages/BrowserExtractor/browserExtractor";
import osExtractor from "../../../packages/OsExtractor/osExtractor";

const DisplayData: React.FC<DisplayDataProps> = ({ session }) => {
  const handleDelete = (id: number) => {
    console.log(`Delete item with ID ${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>مرورگر</th>
            <th>سیستم عامل</th>
            <th>کشور</th>
            <th>آی پی</th>
            <th>آخرین فعالیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {session.map((item: Session, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>
                {translator(
                  browserExtractor(item.user_agent).name
                    ? browserExtractor(item.user_agent).name
                    : "other"
                )}
              </td>
              <td>
                {translator(
                  osExtractor(item.user_agent).name
                    ? osExtractor(item.user_agent).name
                    : "other"
                )}
              </td>
              <td>{translator(item.location.country)}</td>
              <td>{item.ip_address}</td>
              <td>{timeConverter(item.login_at)}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
