import './Card.scss'
import {useDispatch} from 'react-redux'
import {addEvent} from '../reducers/reducer'
import {Event} from '../reducers/reducer'

export default function Card(props:{data:Event}) {
    const dispatch = useDispatch()
    const info = props.data
    return (
        <section className="card" onClick={() => dispatch(addEvent(props.data))}>
            <section className="date">
                <div>{info.date.toLocaleString("default", {day: "numeric"})}</div>
                <div>{info.date.toLocaleString("default", {month: "short"})}</div>
            </section>
            <section className="info">
                <h2>{info.name}</h2>
                <p>{info.location}</p>
                <div className="time-price">
                    <div className="time">
                        {info.startTime} - {info.endTime ?? "du tröttnar"}
                    </div>
                    <div className="price">
                        {info.price} sek
                    </div>
                </div>
            </section>
        </section>
    )
}