import { useEffect, useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import '../styles/Places.css';

type Destination = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const Places = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    fetch('/sri-lanka-data.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <main className="places-main">
      <h1 className="places-title">🌴 Miejsca warte odwiedzenia</h1>
      <p className="places-description">
        Sri Lanka oferuje niesamowite krajobrazy, świątynie i plaże. Oto kilka miejsc, które warto zobaczyć:
      </p>
      <div className="destination-grid">
        {destinations.map((place) => (
          <DestinationCard key={place.id} {...place} />
        ))}
      </div>
    </main>
  );
};

export default Places;
