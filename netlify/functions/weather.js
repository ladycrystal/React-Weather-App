const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const { city } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API key is not configured." }),
      };
    }

    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(weatherResponse.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
