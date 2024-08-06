import axios from "axios";

export async function callPlacesBackend(query) {
    try {
      const placesBeUrl = process.env.REACT_APP_PLACES_BE_URL;
      const url = placesBeUrl + query;
      const encode = encodeURI(url);
      const response = await axios.get(encode).then((response) => response.data);
      console.log(response);
      return response;
  ;  } catch (error) {
      console.error(error);
    }
  };