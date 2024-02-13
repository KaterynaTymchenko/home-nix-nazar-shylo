'use client';

import { useState, useEffect } from 'react';
import classes from './mainPanel.module.css';
import { InfoBlock } from '../InfoBlock';
import { largestUSCities } from '@/src/const';
import { Switch } from '../Switch';

const MainPanel = () => {
  const [chunkOfCities, setChunkOfCities] = useState({ from: 0, to: 10 });
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      chunkOfCities.to <= largestUSCities.length
        ? setChunkOfCities({
            from: chunkOfCities.to,
            to: chunkOfCities.to + 10,
          })
        : setChunkOfCities({ from: 0, to: 10 });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [chunkOfCities.to]);

  const switchMeasurement = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <>
      <div className={classes.switchContainer}>
        <Switch isActive={isCelsius} onChange={switchMeasurement} />
        <span>{isCelsius ? 'Celsius' : 'Kelvin'}</span>
      </div>
      <div className={classes.mainPanelContainer}>
        {largestUSCities
          .slice(chunkOfCities.from, chunkOfCities.to)
          .map((cityData) => (
            <InfoBlock
              cityData={cityData}
              isCelsius={isCelsius}
              key={`${cityData.latitude}${cityData.longitude}`}
            />
          ))}
      </div>
    </>
  );
};

export { MainPanel };
