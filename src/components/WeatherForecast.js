import React, { useCallback, useEffect, useState } from "react";
import Weather from "./Weather";
import styles from "./WeatherForecast.module.css";

function WeatherForecast() {
	const [weather, setWeather] = useState([]);

	const fetchWeatherData = useCallback(async () => {
		try {
			const response = await fetch(
				"https://api.openweathermap.org/data/2.5/onecall?lat=34.05&lon=-118.24&units=metric&exclude=alerts,minutely,hourly&appid=014792182e8f357181156709dcf4db7c"
			);
			const data = await response.json();
			console.log(data);
			const transformedData = data.daily.map((data) => {
				const daylist = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

				for (let i = 0; i < 5; i++) {
					return {
						key: data.dt,
						dayhigh: data.temp.max,
						daylow: data.temp.min,
						dayicon: data.weather[`${i}`].icon,
						date: daylist[new Date(data.dt * 1000).getDay()],
					};
				}
			});
			const reducedarray = transformedData.slice(0, 5);
			console.log(reducedarray);
			setWeather(reducedarray);
			if (!response.ok) {
				throw new Error("Something went wrong.");
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchWeatherData();
	}, [fetchWeatherData]);

	return (
		<div>
			{weather.map((day) => (
				<Weather
					key={day.key}
					dayhigh={day.dayhigh}
					daylow={day.daylow}
					dayicon={day.dayicon}
                    date={day.date}
				/>
			))}
		</div>
	);
}

export default WeatherForecast;
