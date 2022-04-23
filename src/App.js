import styles from "./App.module.css";
import WeatherForecast from "./components/WeatherForecast";

function App() {
	return (
		<div className={styles.app}>
			<section>
				<h2>5 day weather forecast</h2>
				<br />
				<h1>Los Angeles</h1>
			</section>
			<section>
				<WeatherForecast />
			</section>
		</div>
	);
}

export default App;
