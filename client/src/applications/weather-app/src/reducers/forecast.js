const defaultForecastState = {
  address: "sivas",
  humidity: 0.68,
  icon: "partly-cloudy-night",
  location: "Sivas, Sivas, Turkey",
  ozone: 332.9,
  precipProbability: 0,
  pressure: 1017.2,
  summary: "Mostly Cloudy",
  temperature: 3.13,
  units: "si",
  uvIndex: 0,
  visibility: 16.093,
  windSpeed: 3.51,
  flags: {
    units: "si",
    lang: "en",
  },
};

export default (state = defaultForecastState, action) => {
  switch (action.type) {
    case "SET_FORECAST":
      return { ...action.forecast };

    default:
      return state;
  }
};
