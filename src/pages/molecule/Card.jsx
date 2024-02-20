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
                  <p className="card-title">Account Balance</p>
                  <p className="mt-3 w-full card-amount">#{accountBalance}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#EBF5FF" }}
                >
                  <img src={AccountBalanceIcon} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#FEECEB" }}
                >
                  <img src={RedArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#F04438" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0 cursor-pointer"
                    onClick={() => setAccountBalanceDropDown(!accountBalanceDropDown)}
                  />
                  {accountBalanceDropDown && (
                    <div className="absolute w-25 mt-52 ml-40 border bg-white rounded-md max-h-48 overflow-y-auto">
                      <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                        <VsPreviousMonth />
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Total Savings</p>
                  <p className="mt-3 w-full card-amount">#{totalSavings}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#F2EBFB" }}
                >
                  <img src={TotalSavingsIcon} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#E7F8F0" }}
                >
                  <img src={GreenArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#12B76A" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0 cursor-pointer"
                    onClick={() => setTotalSavingsDropDown(!totalSavingsDropDown)}
                  />
                  {totalSavingsDropDown && (
                    <div className="absolute w-25 mt-52 ml-40 border bg-white rounded-md max-h-48 overflow-y-auto">
                      <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                        <VsPreviousMonth />
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-7">
          <div className="bg-white p-3 w-64 h-36 rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Loan Disbursed</p>
                  <p className="mt-3 w-full card-amount">#{loanDisbursed}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#E7F9F4" }}
                >
                  <img src={LoanDisbursed} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#E7F8F0" }}
                >
                  <img src={GreenArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#12B76A" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0 cursor-pointer"
                    onClick={() => setLoanDisbursedDropDown(!loanDisbursedDropDown)}
                  />
                  {loanDisbursedDropDown && (
                    <div className="absolute w-25 mt-52 ml-40 border bg-white rounded-md max-h-48 overflow-y-auto">
                      <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                        <VsPreviousMonth />
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 w-64 h-36 rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="card-title">Loan Repaid</p>
                  <p className="mt-3 w-full card-amount">#{loanRepaid}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#FFE8DE" }}
                >
                  <img src={LoanRepaid} alt="No Img" />
                </div>
              </div>
              <div className="justify-between mt-4 flex h-7">
                <div
                  className="flex rounded h-full w-20"
                  style={{ backgroundColor: "#FEECEB" }}
                >
                  <img src={RedArrow} alt="No Img" className="" />
                  <p
                    className="percentage-figure pl-2 mt-0.5"
                    style={{ color: "#F04438" }}
                  >
                    17%
                  </p>
                </div>
                <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="No Img"
                    className="w-4 h-4 ml-1 mt-0 cursor-pointer"
                    onClick={() => setLoanRepaidDropDown(!loanRepaidDropDown)}
                  />
                  {loanRepaidDropDown && (
                    <div className="absolute w-25 mt-52 ml-40 border bg-white rounded-md max-h-48 overflow-y-auto">
                      <ul className="list-none month-labels ml-3 p-3 cursor-pointer">
                        <VsPreviousMonth />
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
