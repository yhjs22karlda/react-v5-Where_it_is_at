import './Buy.scss'
import {useSelector} from 'react-redux'
import {Event} from '../reducers/reducer'
import {useNavigate} from "react-router-dom"

export default function Buy() {
    const state = useSelector((state:Event) => state)
    const navigate = useNavigate()

    return (
        <section className="buy">
            <p className="text">
                You are about to score some tickets to
            </p>
            <h1>{state.name}</h1>
            <p className="date">
                {state.date.toLocaleString("default", {day: "numeric"})}{' '}
                {state.date.toLocaleString("default", {month: "long"})}{" kl "}
                {state.startTime}{" - "} {state.endTime ?? "du tröttnar"}
            </p>
            <p className="location">@ {state.location}</p>
            <p className="price">{state.price} sek</p>
            <button className="button" onClick={() => navigate("/tickets")}>Beställ</button>
            <button className="button button--gray" onClick={() => navigate("/events")}>Avbryt</button>

        </section>
    )
}