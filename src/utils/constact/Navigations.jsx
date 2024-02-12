import { AiFillAppstore } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";


export const DASHBOARD_SIDE_BAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <AiFillAppstore />,
  },

  {
    key: "loans",
    label: "Loans",
    path: "/loan",
    icon: <HiOutlineBriefcase />,
  },

  {
    key: "savings",
    label: "Savings",
    path: "/savings",
    icon: <HiOutlineShoppingBag />,
  },

  {
    key: "withdrawals",
    label: "Withdrawals",
    path: "/withdrawal",
    icon: <BsHandbag />,
  },

  {
    key: "members",
    label: "Members",
    path: "/members",
    icon: <BsPeople />,
  },

  {
    key: "hire purchase",
    label: "Hire Purchase",
    path: "/hired-purchase",
    icon: <PiShoppingCartSimpleThin />,
  },

  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <TbSettings2 />,
  },
];
