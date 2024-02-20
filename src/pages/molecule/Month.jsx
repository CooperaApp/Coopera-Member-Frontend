import PropTypes from "prop-types";

const Month = () => {
  return (
    <div>
      <MonthDropdownItem month="Jan" />
      <MonthDropdownItem month="Feb" />
      <MonthDropdownItem month="Mar" />
      <MonthDropdownItem month="Apr" />
      <MonthDropdownItem month="May" />
      <MonthDropdownItem month="Jun" />
      <MonthDropdownItem month="Jul" />
      <MonthDropdownItem month="Aug" />
      <MonthDropdownItem month="Sep" />
      <MonthDropdownItem month="Oct" />
      <MonthDropdownItem month="Nov" />
      <MonthDropdownItem month="Dec" />
    </div>
  );
};

Month.propTypes = {
  month: PropTypes.any.isRequired,
};

export default Month;

function MonthDropdownItem(props) {
  // eslint-disable-next-line react/prop-types
  return <li key={props.month}>{props.month}</li>;
}
