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
        <div className=" flex w-full justify-between">
          <div>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold">{province}</div>
              <div className="text-sm font-bold">{city}</div>
            </div>
            <div className="text-2xl font-bold">
              温度
              <span className=" text-king">{temperature}</span>
              &nbsp;&deg;C
            </div>
          </div>

          <Image
            className=" aspect-square"
            src="http://cdn.liuwenjun.fun/test.png"
            alt="weather"
            width={80}
            height={50}
          />
        </div>

        <div className="text-2xl font-bold">
          天气 <span className=" text-main">{weather}</span>
        </div>

        <div className="text-xl font-bold text-normal">{reporttime}</div>
      </div>
    </section>
  );
};

export default WeatherCard;
