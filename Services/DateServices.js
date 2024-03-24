export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: "numeric", 
      month: "short", 
      day: "numeric", 
    };
    return date.toLocaleDateString("en-US", options);
  }

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: "numeric", 
      month: "short", 
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      second: "numeric",
      hour12: true
    };
    return date.toLocaleDateString("en-US", options);
  }

