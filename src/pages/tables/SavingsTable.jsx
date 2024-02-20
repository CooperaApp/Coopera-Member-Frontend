import React from "react";
import { getStatusColor, getTextColor } from "../../utils/functions/colour";
import { DATA } from "../../utils/constant/DummyData";

const SavingsTable = ({ amount, month, date, status }) => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="border">
          <tr className="">
            <th className="activities-heading px-4 py-2 text-left">Amount</th>
            <th className="activities-heading px-4 py-2 text-left">Month</th>
            <th className="activities-heading px-4 py-2 text-left">
              Date and Time
            </th>
            <th className="activities-heading px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.amount}
              </td>

              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.month}
              </td>

              <td
                style={{ color: "#484949" }}
                className="recent-activities-data  px-4 py-2"
              >
                {item.date}
              </td>
              <td className="px-4 py-2">
                {item.status && (
                  <div
                    className=" rounded-full items-align h-6 inline-block"
                    style={{
                      backgroundColor: getStatusColor(item.status),
                      color: getTextColor(item.status),
                    }}
                  >
                    {item.status && (
                      <span className="recent-activities-data p-2">
                        {item.status}
                      </span>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavingsTable;
