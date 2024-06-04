const { default: axios } = require("axios");

const getGooglePlace = (category, lat, lng) =>
  axios.get(
    "/api/google-place?" +
      "category=" +
      category +
      "&radius=10&lat=" +
      lat +
      "&lng=" +
      lng
  );

export default { getGooglePlace };
