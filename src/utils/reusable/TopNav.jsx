import { LuSearch } from "react-icons/lu";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import NotificationIcon from "../../assets/images/svg/NotificationIcon.svg";
import LMCLogo2 from "../../assets/images/svg/LMCLogo2.svg";

const TopNav = () => {
  return (
    <div className="flex flex-row items-center justify-between py-3 space-x-6 px-6 h-12 overflow-hidden border-b" style={{backgroundColor: "#FFFFFF"}}>
      <div className="">
        <form action="w-full max-w-md">
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none"/>
            <input
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
              aria-label="Search"
              className="search-bar pr-3 pl-10 py-2 font-semibold h-8 w-96 placeholder-gray-100 text-blue rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
              style={{backgroundColor: "#F3F3F3"}}/>
          </div>
        </form>
      </div>

      <div className="flex flex-shrink-0 h-8">
        <div className="">
          <img src={NotificationIcon} alt="Notification Icon" className="w-5 h-5 m-2 mt-1 border-r -mr-1"/>
        </div>

        <div className="flex flex-shrink-0 m-2 mt-3 -mr-2">
          <img src={LMCLogo2} alt="Cooperative Logo" className="w-8 h-6 -mt-2"/>
          <div className="flex flex-row flex-shrink-0 ml-2 -mt-2.5">
            <div>
              <p className="cooperative-name">LMC</p>
              <p className="cooperative-name-two">LMC Cooporation</p>
            </div>
            <div className="mt-1 -mr-1">
              <img src={ArrowOptions} alt="Options"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
