import { useState } from "react";
import { options, data } from "../../utils/constant/ChartData";
import { Doughnut } from "react-chartjs-2";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import Month from "./Month";
import "../../styles/PieChart.css";


const PieChart = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="border w-1/2 bg-white rounded-md h-full">
      <div className="p-3 -mt-2">
        <div className="justify-between pt-2 flex flex-row">
          <p className="account-overview">Account Overview</p>
          <div className="border flex relative">
            <p className="previous-month-styling ml-2">Monthly</p>
            <img
              src={ArrowOptions}
              alt="Dropdown Trigger"
              className="w-4 h-4 ml-1 mt-1 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown && (
              <div className="absolute w-20 mt-6 right-0 border bg-white rounded-md max-h-48 overflow-y-auto">
                <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                  <Month />
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="ml-6 w-68 h-56">
          <Doughnut data={data} options={options} />
        </div>

        <div className="flex flex-row justify-between mt-2">
          <div className="flex flex-col space-y-1">
            <div className="flex ">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0079FF" }}
              ></div>
              <span className="pie-chart-labels">Savings Balance</span>
            </div>

            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#0EBE8D" }}
              ></div>
              <span className="pie-chart-labels">Total Hire Purchase Value</span>
            </div>

          </div>

          <div className="flex flex-col space-y-1 mr-5">

          <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#FF6A24" }}
              ></div>
              <span className="pie-chart-labels">Loan Balance</span>
            </div>
            

            <div className="flex">
              <div
                className="w-2 h-2 rounded-full mt-2 mr-1"
                style={{ backgroundColor: "#7838D6" }}
              ></div>
              <span className="pie-chart-labels">Withdraw Balance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

