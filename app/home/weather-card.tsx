import React from 'react';
import { fetchWeather } from '../lib/data';
import Image from 'next/image';

const WeatherCard = async () => {
  const weatherInfo = await fetchWeather();

  const { province, city, weather, temperature, reporttime } = weatherInfo;
  //   console.log(weatherInfo);
  return (
    <section className="flex h-auto w-full rounded-md bg-[#9d9a97] text-base text-white">
      <div className="flex h-full w-full flex-col p-5">
        <div className="flex items-center">
          <div className="text-2xl font-bold">{province}</div>
          <div className="text-xl font-bold">{city}</div>
        </div>

        <div className="text-2xl font-bold">温度{temperature}</div>
        <div className="text-2xl font-bold">
          天气 <span>{weather}</span>
        </div>
        <Image
          src="http://cdn.liuwenjun.fun/test.png?e=1709036788&token=JaJiiLsQrhK2e-OSJvMDMjtcWp3coa9UQQf6dWLs:UiXlFUkqMev84_O95EXeLuOZ0Xk="
          alt="weather"
          width={200}
          height={200}
        />
        <div className="text-2xl font-bold">{reporttime}</div>
      </div>
    </section>
  );
};

export default WeatherCard;
