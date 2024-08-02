const fetchPlaces = async (request) => {
  console.log(request);
  const url = "https://places.googleapis.com/v1/places:searchText";
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyAvC5BusHIfVQM2TC5txGGh-yLyGMTnIZk",
        "X-Goog-Field-Mask": "places.displayName,places.formattedAddress,places.priceLevel,places.websiteUri",
      },
      body: request,
    });
    const data = await response.json();
    console.log(data.places);
  } catch (error) {
    console.error("uh oh!");
  }
};

export default fetchPlaces;
