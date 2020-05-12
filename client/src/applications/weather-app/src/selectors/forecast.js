import { ReactComponent as TemperatureSVG } from "../assets/thermometer-three-quarters-solid.svg";
import { ReactComponent as PressureSVG } from "../assets/pressure.svg";
import { ReactComponent as WindSpeedSVG } from "../assets/speed-solid.svg";
import { ReactComponent as HumiditySVG } from "../assets/humidity-solid.svg";
import { ReactComponent as UVIndexSVG } from "../assets/uv-index.svg";
import { ReactComponent as RainSVG } from "../assets/cloud-rain-solid.svg";
import { ReactComponent as CloudyIcon } from "../assets/cloud-solid.svg";
import { ReactComponent as RainIcon } from "../assets/cloud-showers-heavy-solid.svg";
import { ReactComponent as PartlyCloudyDayIcon } from "../assets/cloud-sun-solid.svg";
import { ReactComponent as PartlyCloudyNightIcon } from "../assets/cloud-moon-solid.svg";
import { ReactComponent as WindIcon } from "../assets/wind-solid.svg";
import { ReactComponent as FogIcon } from "../assets/fog-solid.svg";
import { ReactComponent as SnowIcon } from "../assets/snowflake-solid.svg";
import { ReactComponent as SunIcon } from "../assets/sun-solid.svg";
import { ReactComponent as MoonIcon } from "../assets/moon-solid.svg";
import { ReactComponent as SleetIcon } from "../assets/sleet-solid.svg";

export const getForecastDataSet = (data = {}, tempUnits) => {
  console.log(tempUnits);
  return {
    summary: {
      name: "Summary",
      value: data !== undefined ? data.summary : "",
    },
    temperature: {
      name: "Temperature",
      value: data !== undefined ? data.temperature : "",
      unit: data !== undefined ? tempUnits : "",
      icon: TemperatureSVG,
    },
    pressure: {
      name: "Pressure",
      value: data !== undefined ? data.pressure : "",
      unit: " hPa",
      icon: PressureSVG,
    },
    precipProbability: {
      name: "Precip Probability",
      value: data !== undefined ? data.precipProbability : "",
      unit: "%",
      icon: RainSVG,
    },
    windSpeed: {
      name: "Wind Speed",
      value: data !== undefined ? data.windSpeed : "",
      unit: " Knot",
      icon: WindSpeedSVG,
    },
    humidity: {
      name: "Humidity",
      value: data !== undefined ? data.humidity * 100 : "",
      unit: "%",
      icon: HumiditySVG,
    },
    uvIndex: {
      name: "UV Index",
      value: data !== undefined ? data.uvIndex : "",
      unit: "",
      icon: UVIndexSVG,
    },
  };
};

export const getForecastIcon = {
  "clear-day": SunIcon,
  "clear-night": MoonIcon,
  rain: RainIcon,
  snow: SnowIcon,
  sleet: SleetIcon,
  wind: WindIcon,
  fog: FogIcon,
  cloudy: CloudyIcon,
  "partly-cloudy-day": PartlyCloudyDayIcon,
  "partly-cloudy-night": PartlyCloudyNightIcon,
};

export const getDayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Next Sunday",
];
