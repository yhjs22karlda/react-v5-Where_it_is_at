import './Tickets.scss'
import {useSelector} from 'react-redux'
import {Event} from '../reducers/reducer'
import {useNavigate} from "react-router-dom"

export default function Tickets() {
    const state = useSelector((state:Event) => state)
    const navigate = useNavigate()

    return (
        <section className="tickets">
            <h1>Tack för din beställning</h1>
            <section className="what">
                <p className="small-text">what</p>
                <h2>{state.name}</h2>
            </section>
            <section className="where">
                <p className="small-text">where</p>
                <p>{state.location}</p>
            </section>
            <section className="when">
                <section>
                    <p className="small-text">when</p>
                    <p>{state.date.toLocaleString("default", {day: "numeric"})}{" "}
                        {state.date.toLocaleString("default", {month: "short"})}
                    </p>
                </section>
                <section>
                    <p className="small-text">from</p>
                    <p>{state.startTime}</p>
                </section>
                <section>
                    <p className="small-text">to</p>
                    <p>{state.endTime ?? "-"}</p>
                </section>
            </section>
            <button className="button" onClick={() => navigate("/events")}>Tillbaka</button>
        </section>
    )
}