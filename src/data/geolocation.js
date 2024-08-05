// const fetchIp = async () => {
//   try {
//     const url = process.env.IPIFY_API_URL;
//     console.log(url);
//     const response = await fetch(url);
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const fetchCityFromIp = async () => {
//   try {
//     const ip = await fetchIp();
//     const ipstackApiKey = process.env.IPSTACK_API_ACCESS_KEY;
//     const ipstackApiUrl = process.env.IPSTACK_API_URL;
//     const options = {
//       method: "GET",
//     };
//     const url = ipstackApiUrl + `${ip}?access_key=${ipstackApiKey}`;
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data.city;
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchCityFromIp();
