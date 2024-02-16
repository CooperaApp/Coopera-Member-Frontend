import React from 'react'
import { useState } from 'react';
import AddVector from "../../assets/images/svg/AddVector.svg"
import Filter from "../../assets/images/svg/Filter.svg"
import "../../styles/Savings.css";
import SavingsCard from '../../utils/reusable/SavingsCard';
import { LuSearch } from "react-icons/lu";
import Table from "../tables/SavingsTable";
import Modal from 'react-modal';
import AddSavings from "../modal/AddSavings";
import EditSavings from '../modal/EditSavings';


const modalStyles = {
  content: {
    width: '30%',
    height: '60%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
    borderRadius: '2%',
  },
};




const SavingsBody = () => {

  const [addSavingsModal, setAddSavingsModal] = useState(false);
  const [editSavingsModal, setEditSavingsModal] = useState(false);

  const closeAddSavingsModal = () => {
    setAddSavingsModal(false);
  };

  const closeEditSavingsModal = () => {
    setEditSavingsModal(false);
  };

  const total = "1,987,765.43";

  return (
    <div className='h-full ml-4 mt-2 overflow-y-hidden'>
        <div className='flex flex-row mb-2 border'>

        <div className='savings-tag'>Savings</div>
        <div className="flex flex-row justify-between ml-60 ">
          <button id="add-savings" onClick={() => setAddSavingsModal(true)}>
            Add Savings
            <img src={AddVector} alt=''/>
          </button>
        
          <button id="edit-savings" onClick={() => setEditSavingsModal(true)}>Edit Savings</button>
        </div>
        {addSavingsModal && (
            <Modal isOpen={addSavingsModal} onRequestClose={closeAddSavingsModal} style={modalStyles}>
               <AddSavings />
            </Modal>
          )}

         {editSavingsModal && (
            <Modal isOpen={editSavingsModal} onRequestClose={closeEditSavingsModal} style={modalStyles}>
               <EditSavings />
            </Modal>
          )}
        </div>

        <div>
          <SavingsCard totalSavings={total}/>
        </div>

        <div className="border p-5 bg-white mt-7 rounded-md mr-4 w-12/12 ">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Recent Activities</p>
          </div>

          <div className="flex  justify-between">
            <div className=" relative flex items-center text-gray-200 focus-within:text-gray-400">
              <LuSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
              <input
                type="text"
                name="search"
                placeholder="       Search members..."
                autoComplete="off"
                aria-label="Search"
                className="search-bar  pr-3 pl-10 py-2 font-normal text-sm h-8 w-44 placeholder-gray-600  rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </div>
            <div className="border items-center justify-center flex ml-3 h-7 w-20 mt-0.5 rounded-sm">
              <p className="font-normal text-sm ">Filter</p>
              <img
                src={Filter}
                alt="No Img"
                className="w-4 h-4 ml-2 mt-0"
              />

            </div>
          </div>
        </div>

        <Table />
      </div>

    </div>
  )
}

export default SavingsBody