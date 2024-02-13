import { MapCoordinates, WeatherData } from '@/src/types';
const API_KEY = 'e2e4d5385a30a10f5f0b0ea3f5b23172';
const BASE_WEATHER_ICONS_URL = ' https://openweathermap.org/img/wn';
const fetchData = async (
  mapCoordinates: MapCoordinates,
): Promise<WeatherData> => {
  const { lat, lon } = mapCoordinates;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error('Data fetching failed.');
  }
  const data = await response.json();
  return data;
};
export { BASE_WEATHER_ICONS_URL, fetchData };
