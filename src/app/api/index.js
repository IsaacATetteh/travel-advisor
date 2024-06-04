"use client";
"use client";
import axios from "axios";

export const getLocationId = async (query) => {
  const options = {
    method: "GET",
    url: "https://agoda-com.p.rapidapi.com/hotels/auto-complete",
    params: { query },
    headers: {
      "x-rapidapi-key": NEXT_PUBLIC_RAPID_API_KEY,
      "x-rapidapi-host": "agoda-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
