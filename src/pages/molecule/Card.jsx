import BlueIcon from "../../assets/images/svg/Card-Icon-1.svg";
import PurpleIcon from "../../assets/images/svg/Card-Icon-2.svg";
import GreenIcon from "../../assets/images/svg/LoanDisbursedIcon.svg";
import OrangeIcon from "../../assets/images/svg/LoanRepaidIcon.svg";
import "../../styles/Card.css";
import { formatNumberWithCommasAndDecimal2 } from "../../utils/functions/func";

const Card = ({statistics}) => {

  return (
    <div className="h-full flex-col w-2/3 mr-5">
      <div className="w-full">

        <div className="flex mb-5">
          <div className="bg-white p-4 w-1/2 h-full rounded-xl">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div className="">
                  <p className="font-normal text-lg">Savings</p>
                  <p className="mt-4 w-full card-amount">₦{statistics.totalSavings}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#EBF5FF" }}
                >
                  <img src={GreenIcon} alt="No Img" />
                </div>
              </div>
              <div className="b">
              <button id="add-savings">Add Savings + </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 w-1/2 h-full rounded-xl ml-5">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="font-normal text-lg">Total Loan</p>
                  <p className="mt-4 w-full card-amount">₦{statistics.totalLoans}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#F2EBFB" }}
                >
                  <img src={OrangeIcon} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Repay Loan </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-1/2">

          <div className="bg-white p-4 w-1/2 h-full rounded-xl ">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="font-normal text-lg">Total Hired Purchase Value</p>
                  <p className="mt-4 w-full card-amount">₦{statistics.totalHiredPurchase}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#E7F9F4" }}
                >
                  <img src={BlueIcon} alt="No Img" />
                </div>
              </div>
              <div>
              <button id="add-savings">Hired Purchase + </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 w-1/2 h-full rounded-xl ml-3">
            <div className="h-32  p-0 ">
              <div className="p-0 flex justify-between mb-2">
                <div>
                  <p className="font-normal text-lg">Total Withdrawal</p>
                  <p className="mt-4 w-full card-amount">₦{statistics.withdrawals}</p>
                </div>
                <div
                  className="ml-4 h-7 rounded-md items-center"
                  style={{ backgroundColor: "#FFE8DE" }}
                >
                  <img src={PurpleIcon} alt="No Img" />
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
