import CancelIcon from "../../assets/images/svg/Cancel-Icon.svg";
import { AddMemberSavings } from "../../utils/api/APICalls";
import { useState } from "react";
import axiosInstance from "../../utils/axios-config";

const AddSavings = () => {
  const [amountToSave, setAmountToSave] = useState();
  const memberId = "LMC43901";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("token");
    console.log("token ----  ", token);

    const activityLog = {
      activityName: "Savings",
      memberEmail: "pugnibakko@gufum.com",
      amount: "1500",
    };
    
    const headers = {
      Authorization: `Bearer ${token}`,
      activityLog: JSON.stringify(activityLog),
    };

    try {
      console.log("Inside try")
      const res = await AddMemberSavings(amountToSave, headers);
      console.log("Returned response === ", res)

      if (res.status >= 200 && res.status < 300) {
        console.log("Success");
        console.log("Res.data", res.data);
      } else {
        console.log("Invalid");
      }
    } catch (error) {
      console.log("Failed");
    }
  };


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
    // axiosInstance.post('/savings/save', {
    //   amountToSave: amountToSave,
    // })
    //   .then((response) => {
    //     console.log('Data received:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  // };


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
