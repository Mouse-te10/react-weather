import { useState } from "react"

export default function Search(props) {

    const [city, setCity] = useState(null)

    function writeCity(e) {
        setCity(e.target.value)
    }

    function getData() {
        props.getWeather(city)
    }

    return (
        <div>
            <label htmlFor="inputCity">Введите город:</label>
            <input type="text" id="inputCity" onChange={(e) => writeCity(e)} />
            <button onClick={getData}>Получить данные</button>
        </div>
    )
}