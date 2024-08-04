import { fetchCityFromIp } from "./geolocation";

const fetchPlaces = async (request) => {
  try {
    const city = await fetchCityFromIp();
    console.log(city);
  } catch (error) {
    console.error("uh oh!");
  }
};

export default fetchPlaces;
