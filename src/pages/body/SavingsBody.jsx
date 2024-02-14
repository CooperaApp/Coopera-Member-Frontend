import React from 'react'
import AddVector from "../../assets/images/svg/AddVector.svg"
import "../../styles/Savings.css";
import SavingsCard from '../../utils/reusable/SavingsCard';

const SavingsBody = () => {

  const total = "1,987,765.43";
  return (
    <div className='h-full ml-4 mt-2 overflow-y-hidden'>
        <div className='flex flex-row mb-2 border'>

        <div className='savings-tag'>Savings</div>
        <div className="flex flex-row justify-between ml-60 ">
          <button id="add-savings">
            Add Savings
            <img src={AddVector} alt=''/>
          </button>
          <button id="edit-savings">Edit Savings</button>
        </div>
        </div>

        <div>
          <SavingsCard totalSavings={total}/>
        </div>

    </div>
  )
}

export default SavingsBody