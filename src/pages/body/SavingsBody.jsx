import React from 'react'
import { useState } from 'react';
import  AddVector  from "../../assets/images/svg/AddVector.svg"
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
    width: '38%',
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
    <div className='ml-4 mt-2 overflow-y-hidden h-full'>
        <div className='flex flex-row mb-2 mr-5 justify-between'>

        <div className='savings-tag'>Savings</div>
        <div className="flex flex-row justify-between ml-60 ">
          <button id="add-savings-top" onClick={() => setAddSavingsModal(true)}>
            + Add Savings
          </button>
        
          <button id="edit-savings-top" onClick={() => setEditSavingsModal(true)}>Edit Savings Plan</button>
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

        <div className="border p-5 bg-white mt-7 rounded-md mr-4 w-12/12 h-96">
        <div className="mb-5 flex w-full justify-between h-8">
          <div>
            <p className="heading">Savings History</p>
          </div>

          <div className="flex border">
            <div className="border items-center justify-center flex ml-3 h-7 w-20 mt-0.5 rounded-sm">
              <p className="font-normal text-sm ">Filter</p>
              <img
                src={Filter}
                alt="No Img"
                className="w-4 h-4 ml-2 mt-0"
              />
            </div>

            <div>
            <button id="view-savings-history" >
            + View Savings History
          </button>
            </div>
          </div>
        </div>

        <Table />
      </div>

    </div>
  )
}

export default SavingsBody