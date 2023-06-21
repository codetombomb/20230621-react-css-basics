import Card from "react-bootstrap/Card";
import styles from './styles.module.css'

function CreatureCard({ cardImg, name, description }) {
  return (
    <Card className={styles.creatureCard} style={{ width: "18rem" }}>
      <img variant="top" src={cardImg} alt={name} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
        <Card.Text className="card-desc">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CreatureCard;