import dotenv from "dotenv";

dotenv.config();

const WDATA = {
  access_key: process.env.REACT_WEATHER_API_KEY
};
export default WDATA;
