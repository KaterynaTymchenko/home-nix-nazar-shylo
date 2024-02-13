import { BASE_WEATHER_ICONS_URL } from '@/src/api';
const getWeatherIconURL = (iconCode: string) =>
  `${BASE_WEATHER_ICONS_URL}/${iconCode}.png`;
const getCurrentTime = (offset: number): string => {
  const currentDate = new Date();
  const dateInUTC =
    currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
  const dateTime = new Date(dateInUTC + 3600000 * offset);
  return dateTime.toLocaleString();
};
const convertKelvinToCelsius = (kelvins: number) => {
  const ABSOLUTE_ZERO = 273.15;
  const celsius = kelvins - ABSOLUTE_ZERO;
  return Math.round(celsius);
};
export { getWeatherIconURL, getCurrentTime, convertKelvinToCelsius };
