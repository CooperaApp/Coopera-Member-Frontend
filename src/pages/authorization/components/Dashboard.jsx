import SideBar from "../../../utils/reusable/SideBar";
import TopNav from "../../../utils/reusable/TopNav";
import DashboardBody from "../../body/DashboardBody";

const Savings = () => {
  return (
    <div
      className="flex flex-row bg-white-100 h-screen overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
      <TopNav />
      <DashboardBody />
      </div>
    </div>
  );
};

export default Savings;