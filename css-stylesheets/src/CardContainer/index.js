import CreatureCard from "../CreatureCard"
import './styles.css'

function CardContainer({creatures}) {
  return (
    <div className="card-container">
        {creatures.map(creature => {
            return <CreatureCard key={creature.id} name={creature.name} cardImg={creature.image} description={creature.description}/>
        })}
    </div>
  )
}
export default CardContainer