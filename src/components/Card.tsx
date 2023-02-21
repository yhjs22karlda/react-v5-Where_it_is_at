import './Card.scss'
import {useDispatch} from 'react-redux'
import {addEvent} from '../reducers/reducer'
import {Event} from '../reducers/reducer'

export default function Card(props:{data:Event}) {
    const dispatch = useDispatch()

    return (
        <section className="card" onClick={() => dispatch(addEvent(props.data))}>
            <p>card</p>
        </section>
    )
}