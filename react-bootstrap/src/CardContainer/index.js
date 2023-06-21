import CreatureCard from "../CreatureCard";
import styles from './styles.module.css'


function CardContainer({ creatures }) {

  return <div className={styles.CardContainer}>{creatures.map((creature) => {
    return <CreatureCard key={creature.id} cardImg={creature.image} name={creature.name} description={creature.description}/>
  })}</div>

}
export default CardContainer;