'use client';

import Image from 'next/image';
import {
  convertKelvinToCelsius,
  getCurrentTime,
  getWeatherIconURL,
} from '@/src/utils';
import classes from './infoBlock.module.css';
import { useEffect, useState } from 'react';
import { fetchData } from '@/src/api';
import { CityData, WeatherData } from '@/src/types';

interface IInfoBlockProps {
  cityData: CityData;
  isCelsius: boolean;
}

const InfoBlock = (props: IInfoBlockProps) => {
  const { cityData, isCelsius } = props;

  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    (async () => {
      const data = await fetchData({
        lat: cityData.latitude,
        lon: cityData.longitude,
      });

      setWeatherData(data);
    })();
  }, [cityData]);

  if (!weatherData) {
    return <div className={classes.infoBlockContainer}></div>;
  }

  const { name: cityName, timezone, weather, main } = weatherData;

  const primaryWeatherData = weather[0];

  const currentTime = getCurrentTime(timezone);
  const temperatureValue = isCelsius ? (
    <>{convertKelvinToCelsius(main.temp)}&#8451;</>
  ) : (
    <>{Math.round(main.temp)} K</>
  );

  return (
    <div className={classes.infoBlockContainer}>
      <h2>{cityName}</h2>
      <br />
      <p>{currentTime}</p>
      <Image
        src={getWeatherIconURL(primaryWeatherData.icon)}
        alt="weather icon"
        width={60}
        height={60}
      />
      <h1>{temperatureValue}</h1>
      <br />
      <p>
        {primaryWeatherData.main} ({primaryWeatherData.description})
      </p>
    </div>
  );
};
export { InfoBlock };
