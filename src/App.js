import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import './index.css'

export default function App() {
    const [loading, setLoading] = useState(false)
    const [startText, setStartText] = useState(true)
    const [city, setCity] = useState(null)
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [data, setData] = useState(null)
    const [condition, setCondition] = useState(null)

    const apiKey = '86a159a7ae504c23a3792550250607'

    const gettingWeather = async (city) => {
        setStartText(false)
        setLoading(true)
        const apiUrl = await
            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ru`)
        const data = await apiUrl.json()
        console.log(data)

        setCity(data.location.name)
        setTemp(data.current.temp_c)
        setWind(data.current.wind_kph)
        setHumidity(data.current.humidity)
        setCondition(data.current.condition.text)
        setData(data.current.last_updated)
    }

    useEffect(() => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }, [city])
      
    return (
        <div className="weather-window">
          <h1>Weather</h1>
          <Search getWeather={gettingWeather} />
          {startText ? <div style={{margin: '30px'}}>Здесь будут отображены данные о погоде</div> :
          loading ? <div style={{margin: '30px'}}>Загрузка...</div> : <Weather city={city} temp={temp} wind={wind} humidity={humidity} condition={condition} data={data} />}
        </div>
    )
}
