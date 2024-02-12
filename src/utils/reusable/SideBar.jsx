import CooperaFullLogo from "../../assets/images/svg/CooperaFullLogo.svg";
import LMCLogo from "../../assets/images/svg/LMCLogo.svg";
import { DASHBOARD_SIDE_BAR_LINKS } from "../constant/Navigations";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const linkClasses = "flex items-center gap-2 text-gray-500 font-light px-3 py-2 hover:bg-purple-100 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
const SideBar = () => {
  return (
    <div className="w-48 pt-0 mt-0 h-full items-center flex flex-col border overflow-hidden">
      <div className="flex flex-col justify-between items-center pt-0 px-1 py-3">
        <img className="w-20 pt-5 pb-6" src={CooperaFullLogo} alt="Coopera Logo"/>
        <img className="w-16 h-16" src={LMCLogo} alt="LMC Logo"/>
      </div>

      <div className="flex-1">
        {DASHBOARD_SIDE_BAR_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item}/>
        ))}
      </div>
    </div>
  );
};

function SideBarLink({ item }) {
  return (
    <Link to={item.path} className={linkClasses + " sidebar-link"}>
      {item.icon}
      {item.label}
    </Link>
  );
}

SideBarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
};

export default SideBar;