import './DestinationCard.css';

type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const DestinationCard = ({ name, description, image }: Destination) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DestinationCard;
