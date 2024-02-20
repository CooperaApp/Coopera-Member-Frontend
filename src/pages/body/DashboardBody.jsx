import React from 'react';
import PieChart from "../molecule/PieChart";
import Filter from "../../assets/images/svg/Filter.svg";
import { LuSearch } from "react-icons/lu";
import Card from '../molecule/Card';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";

import Table from "../tables/Table";
import CustomDatePicker from "../molecule/CustomDatePicker";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
);

const handleSelectDate = (date) => {
  console.log("Selected date:", date);
};

const DashboardBody = () => {
  return (

    <div className="h-full ml-4 overflow-y-hidden">
      <div className="w-full flex mt-2 mb-2 flex-shrink-0 justify-between w-5/6">
        <div className="dashboard-header">Dashboard Overview</div>

        <CustomDatePicker onSelectDate={handleSelectDate} />
      </div>

      <div className="w-full h-80 flex flex-row flex-shrink-0">
        <Card />
        <PieChart />
      </div>

      <div className="border p-5 bg-white mt-7 rounded-md mr-4 w-12/12 ">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Recent Activities</p>
          </div>

          <div className="flex  justify-between">
            <div className=" relative flex items-center text-gray-200 focus-within:text-gray-400">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="       Search members..."
                autoComplete="off"
                aria-label="Search"
                className="search-bar  pr-3 pl-10 py-2 font-normal text-sm h-8 w-44 placeholder-gray-600  rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
            <div className="border items-center justify-center flex ml-3 h-7 w-20 mt-0.5 rounded-sm">
              <p className="font-normal text-sm ">Filter</p>
              <img
                src={Filter}
                alt="No Img"
                className="w-4 h-4 ml-2 mt-0"
              />

            </div>
          </div>
        </div>

        <Table />
      </div>
    </div>
  );




}

export default DashboardBody