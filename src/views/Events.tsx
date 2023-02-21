import './Events.scss'
import data from '../assets/data.json'
import Card from '../components/Card'
import {Link} from 'react-router-dom'

export default function Events() {
    const dateData = data.map(item => { // gör om data.date till Date-format
        return {
            ...item,
            date: new Date(item.date)
        }
    })

    return (
        <div className="events">
            <Link to="/buy">
                {dateData.map((card, i) => <Card key={i} data={card} />)}
            </Link>
        </div>
    )
}