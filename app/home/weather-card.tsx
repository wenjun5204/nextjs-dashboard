import React from 'react';
import { fetchWeather } from '../lib/data';

const WeatherCard = async () => {
  const weatherInfo = await fetchWeather();

  const { province, city, weather, temperature, reporttime } = weatherInfo;
  //   console.log(weatherInfo);
  return (
    <section className="flex h-auto w-full bg-[#9d9a97] rounded-md text-base text-white">
      <div className="flex w-full h-full flex-col p-5">
        <div className="flex items-center">
          <div className="text-2xl font-bold">{province}</div>
          <div className="text-xl font-bold">{city}</div>
        </div>

        <div className="text-2xl font-bold">温度{temperature}</div>
        <div className="text-2xl font-bold">
          天气 <span>{weather}</span>
        </div>
        <div className="text-2xl font-bold">{reporttime}</div>
      </div>
    </section>
  );
};

export default WeatherCard;
