import CancelIcon from "../../assets/images/svg/Cancel-Icon.svg";
import { AddMemberSavings } from "../../utils/api/APICalls";
import { useState } from "react";

const AddSavings = () => {
  const [amountToSave, setAmountToSave] = useState();
  const memberId = "LMC43901";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      const res = await AddMemberSavings({ amountToSave, token });

      if (res.status >= 200 && res.status < 300) {
        console.log("Success");
      } else {
        console.log("Invalid");
      }
    } catch (error) {
      console.log("Failed");
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between mb-2">
        <p className="add-savings-text">Add Savings</p>
        <img src={CancelIcon} alt="Cancel Icon" className="h-5 w-5 mt-2" />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="add-savings-text-label">Member ID</label>
            <br />
            <input
              value={memberId}
              className="w-full rounded-md bg-[#C5C5C5] h-10"
              disabled={true}
            />
          </div>

          <div className="mb-9">
            <label className="add-savings-text-label">Amount</label>
            <br />
            <input
              placeholder="Input Amount"
              className="w-full rounded-md bg-[#F3F3F3] h-10"
              value={amountToSave}
              onChange={(event) => setAmountToSave(event.target.value)}
            />
          </div>

          <div className="bg-[#7838D6] text-white h-10 rounded-md flex justify-center items-center">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSavings;
