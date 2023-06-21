import './styles.css'

function CreatureCard({ cardImg, name, description }) {
  return (
    <div className="card center-align">
      <img className="card-img" src={cardImg} alt={name} />
      <h1 className="card-h1">{name}</h1>
      <p className="card-desc">{description}</p>
    </div>
  );
}
export default CreatureCard;
