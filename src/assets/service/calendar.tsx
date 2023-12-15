import axios from "axios";

export const fetchRevenueCalendarData = async () => {
  const response = await axios.get("/data/revenueCalendarData.json");
  return response.data;
};
