import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import calendarIcon from "../../assets/images/svg/DatePicker.svg";

function CustomInput({ value, onClick }) {
  return (
    <div className="flex items-center">
      <div>
        <img className="cursor-pointer ml-1 h-4 w-4 bg-white" src={calendarIcon} alt="Calendar" />
      </div>
      <input
        className="w-20 pl-1"
        type="text"
        placeholder="Select Dates"
        style={{ fontSize: "12px" }}
        value={value}
        onClick={onClick}
        readOnly
      />
    </div>
  );
}

export default function CustomDatePicker({ onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  return (
    <div className="border bg-white rounded-md mt-1 w-28 mr-4 h-6">
      <label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<CustomInput />}
          todayButton="TODAY"
        />
      </label>
    </div>
  );
}

CustomDatePicker.propTypes = {
  onSelectDate: PropTypes.func,
};

CustomInput.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.any.isRequired,
};
