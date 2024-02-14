import React from 'react';
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import Flower from "../../assets/images/svg/SavingsFlower.svg";
import FlowerTwo from "../../assets/images/svg/SavingsFlower2.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";

const SavingsCard = ({totalSavings}) => {
  return (
        <div className="mb-10 h-60 ml-4 mr-4 mb-7 flex bg-[#FFFFFF] rounded-lg relative">
          <div className="absolute bottom-0 left-0">
            <img src={Flower} alt="Flower One" />
          </div>

          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="total-savings font-semibold text-xl mb-3">
              Total Savings
            </p>
            <p className="total-savings-amount  mb-4">{totalSavings}</p>

            <div className="flex mb-5">
              <div
                className="flex rounded h-full w-20"
                style={{ backgroundColor: "#E7F8F0" }}
              >
                <img src={GreenArrow} alt="Green Arrow" />
                <p
                  className="percentage-figure pl-2 mt-0.5"
                  style={{ color: "#12B76A" }}
                >
                  17%
                </p>
              </div>
              <div className="flex items-center ml-3">
                <div className="border flex h-6 rounded-sm w-30">
                  <p className="previous-month-styling ml-2">
                    vs previous month
                  </p>
                  <img
                    src={ArrowOptions}
                    alt="Arrow Options"
                    className="w-4 h-4 ml-1 mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img src={FlowerTwo} alt="Flower Two" />
          </div>
        </div>
  )
}

export default SavingsCard