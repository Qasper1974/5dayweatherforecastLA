import React, { useCallback, useEffect, useState } from "react";
import styles from "./WeatherForecast.module.css";

function WeatherForecast() {
	const [weather, setWeather] = useState([]);

	const fetchWeatherData = useCallback(async () => {
		try {
			const response = await fetch(
				"https://api.openweathermap.org/data/2.5/onecall?lat=34.05&lon=-118.24&units=metric&exclude=alerts,minutely,hourly&appid=014792182e8f357181156709dcf4db7c"
			);
			const data = await response.json();
			const transformedData = data.daily.map((data) => {
				return { key: data.dt, dayhigh: data.temp.day };
			});
			console.log(transformedData);
			// setWeather(transformedData);
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
			{/* {weather.map((dayTemp) => (
				// <p id={key}>{dayTemp}</p>
			))} */}
		</div>
	);
}

export default WeatherForecast;
