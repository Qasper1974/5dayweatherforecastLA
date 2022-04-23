import React from "react";
import styles from "./Weather.module.css";

function Weather({ dayhigh, daylow, dayicon, date }) {
    
	return (
		<div className={styles.days}>
			<div className={styles.day}>
				<div className={styles.date}>{date}</div>
				<div className={styles.icon}>
					<img src={`https://openweathermap.org/img/wn/${dayicon}@2x.png`} />
				</div>
				<div className={styles.temperatures}>
					<div>{Math.round(dayhigh,0)}°</div>
					<div className={styles.temperatures__min}>{Math.round(daylow,0)}°</div>
				</div>
			</div>
		</div>
	);
}

export default Weather;
