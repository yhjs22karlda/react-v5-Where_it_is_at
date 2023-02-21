import './Card.scss'
import {useDispatch} from 'react-redux'
import {addEvent} from '../reducers/reducer'
import {Event} from '../reducers/reducer'

export default function Card(props: {data: Event, index:number}) {
    const dispatch = useDispatch()
    console.log(props.data);
    function handleClick() {
        dispatch(addEvent(props.data))
    }

    return (
        <section className="card" onClick={handleClick}>
            <p>card</p>

        </section>
    )
}