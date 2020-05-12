const defaultForecastSettings = {
  units: "si",
  lang: "en",
};

export default (state = defaultForecastSettings, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
