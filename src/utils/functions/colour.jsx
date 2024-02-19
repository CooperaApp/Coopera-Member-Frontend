export const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
    case "completed":
      return "#E7F8F0";
      case "ongoing":
        return "#FEF4E6";
    case "approved":
      return "#E7F8F0";
    case "cancelled":
      return "#FEECEB";
    case "pending":
      return "#FEF4E6";
    default:
      return "";
    }
  };
  
  export const getTextColor = (status) => {
    switch (status.toLowerCase()) {
    case "completed":
      return "#12B76A";
    case "ongoing":
      return "#F79009";
    case "approved":
      return "#12B76A";
    case "cancelled":
      return "#F04438";
    case "pending":
      return "#F79009";
    default:
      return "";
    }
  };