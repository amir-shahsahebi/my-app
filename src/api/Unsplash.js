import axios  from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8-8_L71rwFXFBZx71ejqr5gyxnoUp6bi8kqRK__l4UM",
  },
});