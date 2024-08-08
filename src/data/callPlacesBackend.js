import axios from "axios";

export async function callPlacesBackend(query) {
    try {
      const placesBeUrl = process.env.REACT_APP_PLACES_BE_URL;
      const url = placesBeUrl + query;
      const encode = await encodeURI(url);
      const response = await axios.get(encode);
      return response.data.places;
  ;  } catch (error) {
      console.error(error);
    }
  };