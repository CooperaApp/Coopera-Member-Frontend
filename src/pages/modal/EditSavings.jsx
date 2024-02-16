import CancelIcon from "../../assets/images/svg/Cancel-Icon.svg";

const EditSavings = () => {
    const memberId = "LMC43901";

    const handleSubmit = () => {

    }; 

    return (
          <div className="p-5">

            <div className="flex flex-row justify-between mb-2">
                  <p className="add-savings-text">Edit Savings Plan</p>
                  <img src={CancelIcon} alt="Cancel Icon" className="h-5 w-5 mt-2"/>
            </div>

            <div>
                  <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                        <label className="add-savings-text-label">New Savings Amount</label><br />
                        <input placeholder="Input Amount" className="w-full rounded-md bg-[#F3F3F3] h-10"/>
                        </div>

                        <div className="mb-9">
                        <label className="add-savings-text-label">Monthly</label><br />
                        <input placeholder={memberId} className="w-full rounded-md bg-[#C5C5C5] h-10"/>
                        </div>

                        <div className="bg-[#7838D6] text-white h-10 rounded-md flex justify-center items-center">
                              <button>Save Changes</button>
                        </div>

                  </form>
            </div>
           
          </div>
    )
  }


export default EditSavings