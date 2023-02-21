import './Buy.scss'
import {useSelector} from 'react-redux'
import {Event} from '../reducers/reducer'

export default function Buy() {
    const state = useSelector((state:Event) => state)

    return (

        <p>{state.name}</p>
    )
}