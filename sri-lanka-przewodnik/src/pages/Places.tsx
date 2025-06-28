import { useState } from "react";
import { places as initialPlaces } from "../data/places";
import DestinationCard from "../components/DestinationCard";
import "../styles/Places.css";

type Place = {
  name: string;
  description: string;
  image: string;
};

const Places = () => {
  const [places, setPlaces] = useState<Place[]>(initialPlaces);

  const [newPlace, setNewPlace] = useState<Place>({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPlace({ ...newPlace, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPlace((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlace.name && newPlace.image && newPlace.description) {
      setPlaces([...places, newPlace]);
      setNewPlace({ name: "", description: "", image: "" });
    }
  };

  return (
    <main className="places-page">
      <h1>📍 Miejsca warte odwiedzenia</h1>

     <section className="places-list">
        {places.map((place, idx) => (
          <DestinationCard
            key={idx}
            name={place.name}
            image={place.image}
            description={place.description}
          />
        ))}
      </section>
      
      <form onSubmit={handleSubmit} className="add-place-form">
        <h2>Dodaj nowe miejsce</h2>
        <input
          type="text"
          name="name"
          placeholder="Nazwa miejsca"
          value={newPlace.name}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        <textarea
          name="description"
          placeholder="Opis miejsca"
          value={newPlace.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Dodaj miejsce</button>
      </form>

     
    </main>
  );
};

export default Places;
