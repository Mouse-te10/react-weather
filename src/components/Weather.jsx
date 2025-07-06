import React from "react";

export default function Weather(props) {

    return (
        <div>
            <p>Дата: {props.data}</p>
            <p>В городе {props.city} {props.condition}</p>
            <p>Температура: {props.temp} градусов</p>
            <p>Скорость ветра: {props.wind}км/ч</p>
            <p>Влажность: {props.humidity}%</p>
        </div>
    )
}