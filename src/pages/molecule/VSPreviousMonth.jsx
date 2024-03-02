import PropTypes from "prop-types";

const VsPreviousMonth = () => {
  return (
    <div>
      <DropdownItem month="2 months ago" />
      <DropdownItem month="3 months ago" />
      <DropdownItem month="4 months ago" />
      <DropdownItem month="6 months ago" />
    </div>
  );
};

VsPreviousMonth.propTypes = {
  month: PropTypes.any.isRequired,
};

export default VsPreviousMonth;

function DropdownItem(props) {
  // eslint-disable-next-line react/prop-types
  return <li key={props.month}>{props.month}</li>;
}
