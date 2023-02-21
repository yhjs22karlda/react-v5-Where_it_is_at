import './Events.scss'
import data from '../assets/data.json'
import Card from '../components/Card'

export default function Events() {
    const dateData = data.map(item => {
        return {
            ...item,
            date: new Date(item.date)
        }
    })

    console.log("events",data, dateData);
    return (
        <div className="events">
            {dateData.map((card, i) => <Card key={i} data={card} index={i} />)}
            
        </div>
    )
}