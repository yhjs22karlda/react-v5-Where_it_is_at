import './Tickets.scss'
import {useSelector} from 'react-redux'
import {Event} from '../reducers/reducer'

export default function Tickets() {
    const state = useSelector((state:Event) => state)

    return (
        <p>Tickets</p>
    )
}