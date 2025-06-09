import '../styles/Map.css';


const MapPage = () => {
  return (
    <div className="map-container">
      <img
        src="/images/sri-lanka-map.png"
        alt="Mapa Sri Lanki"
        className="map-image"
      />

      {/* Przykład: interaktywny hotspot */}
      <a
        href="https://en.wikipedia.org/wiki/Sigiriya"
        target="_blank"
        rel="noopener noreferrer"
        className="hotspot sigiriya"
        title="Sigiriya – zobacz na Wikipedii"
      >
        🔍
      </a>

      <a
        href="https://en.wikipedia.org/wiki/Ella,_Sri_Lanka"
        target="_blank"
        rel="noopener noreferrer"
        className="hotspot ella"
        title="Ella – zobacz na Wikipedii"
      >
        🔍
      </a>

      <a
        href="https://en.wikipedia.org/wiki/Mirissa"
        target="_blank"
        rel="noopener noreferrer"
        className="hotspot mirissa"
        title="Mirissa – zobacz na Wikipedii"
      >
        🔍
      </a>
    </div>
  );
};

export default MapPage;
