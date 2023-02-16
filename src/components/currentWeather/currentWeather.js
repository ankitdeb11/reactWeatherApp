import "./currentWeather.css"

const CurrentWeather = () => {

    return (
        <div className="weather">
            <div className="top">
                <p className="city">Delhi</p>
                <p className="weather-description">Sunny</p>
            </div>

            <img alt="weather" className="weatherIcon" src="icons/01d.png" />
        </div>
    );

}

export default CurrentWeather;
