import AccountBalanceIcon from "../../assets/images/svg/Card-Icon-1.svg";
import TotalSavingsIcon from "../../assets/images/svg/Card-Icon-2.svg";
import LoanDisbursed from "../../assets/images/svg/LoanDisbursedIcon.svg";
import LoanRepaid from "../../assets/images/svg/LoanRepaidIcon.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/api/API_BASE_URL";
import { useState, useEffect } from "react";
import VsPreviousMonth from "./VSPreviousMonth";
import "../../styles/Card.css";

const Card = () => {
  const [totalSavings, setTotalSavings] = useState(0);
  const [loanRepaid, setLoanRepaid] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [loanDisbursed, setLoanDisbursed] = useState(0);
  const [loanDisbursedDropDown, setLoanDisbursedDropDown] = useState(false);
  const [accountBalanceDropDown, setAccountBalanceDropDown] = useState(false);
  const [totalSavingsDropDown, setTotalSavingsDropDown] = useState(false);
  const [loanRepaidDropDown, setLoanRepaidDropDown] = useState(false);

  useEffect(() => {
    const getDashboardStatistics = async () => {
      const url = `${BASE_URL}/member/getMemberDashboardStatistic`;
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
        console.log(response);
        setTotalSavings(response.data.data.totalSavings);
        setAccountBalance(response.data.data.accountBalance);
        setLoanDisbursed(response.data.data.loanDisbursed);
        setLoanRepaid(response.data.data.loanRepaid);
      } catch (error) {
        console.log(error);
      }
    };
    getDashboardStatistics();
  }, []);

  return (
    <div className="mr-3 h-80 flex flex-row flex-shrink-0">
      <div className="">
        <div className="flex">
          <div className="bg-white p-3 w-64 h-36 rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Savings</p>
                  <p className="mt-3 w-full card-amount">#{accountBalance}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#EBF5FF" }}
                >
                  <img src={AccountBalanceIcon} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Add Savings + </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Total Loan</p>
                  <p className="mt-3 w-full card-amount">#{totalSavings}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#F2EBFB" }}
                >
                  <img src={TotalSavingsIcon} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Repay Loan </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-7">
          <div className="bg-white p-3 w-64 h-36 rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Total Hired Purchase Value</p>
                  <p className="mt-3 w-full card-amount">#{loanDisbursed}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#E7F9F4" }}
                >
                  <img src={LoanDisbursed} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Hired Purchase + </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Total Withdrawal</p>
                  <p className="mt-3 w-full card-amount">#{loanRepaid}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#FFE8DE" }}
                >
                  <img src={LoanRepaid} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Withdrawals</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Card;
