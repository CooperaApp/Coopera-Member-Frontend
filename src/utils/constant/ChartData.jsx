export const BarData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [
        4311000, 458000, 664000, 7666000, 665000, 890000, 9100000, 620000,
        5110000, 380000, 2140000, 9122000,
      ],
      borderColor: "#7838D6",
      backgroundColor: "#7838D6",
    },
  ],
};


export const LineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Loan disbursed",
      data: [
        11000, 4258000, 664000, 7666000, 665000, 890000, 9100000, 620000,
        5110000, 380000, 2140000, 9122000,
      ],
      borderColor: "#0EBE8D",
    },
    {
      label: "Loan repaid",
      data: [
        10000000, 9000000, 7000000, 6000000, 7700000, 10000000, 120000, 122000,
        9000000, 180000, 6000000, 82000,
      ],
      borderColor: "#7838D6",
    },
  ],
};


export const LineOptions = {
  scales: {
    y: {
      suggestedMin: 30000, // Set your minimum value
      suggestedMax: 150000, // Set your maximum value
    },
  },
};

export const data = {
  //   labels: ["Savings", "Loan", "Withdraw", "Hire Purchase"],
  datasets: [
    {
      data: [25, 25, 25, 25],
      backgroundColor: ["#7838D6", "#0EBE8D", "#FF6A24", "#0079FF"],
      hoverBackgroundColor: ["#7838D6", "#0EBE8D", "#FF6A24", "#0079FF"],
    },
  ],
};

export const options = {
  maintainAspectRatio: false,
  width: 50,
  height: 50,
  output: 50,
};