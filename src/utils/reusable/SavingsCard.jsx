import React from 'react';
import Flower from "../../assets/images/svg/SavingsFlower.svg";
import FlowerTwo from "../../assets/images/svg/SavingsFlower2.svg";
import AddVector from "../../assets/images/svg/AddVector.svg"

const SavingsCard = ({totalSavings}) => {
  return (
        <div className="mb-10 h-60 mr-4 mb-7 flex bg-[#FFFFFF] rounded-lg relative">
          <div className="absolute bottom-0 left-0">
            <img src={Flower} alt="Flower One" />
          </div>

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="total-savings font-semibold text-xl mb-3">
              Total Savings
            </p>
            <p className="total-savings-amount  mb-4">{totalSavings}</p>

            <div className="flex mb-5">
            <button id="edit-savings-large">
            Add Savings
            <img src={AddVector} alt=''/>
          </button>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img src={FlowerTwo} alt="Flower Two" />
          </div>
        </div>
  )
}

export default SavingsCard