import '../styles/Home.css';

const Home = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('/images/sri-lanka-hero.jpg')"
      }}
    >
      <div className="hero-overlay">
        <h1>🌸 Witamy w przewodniku po Sri Lance</h1>
        <p>
          Odkryj piękno Sri Lanki – od plaż, przez góry, aż po dziedzictwo kulturowe.  
          Wybierz zakładkę z menu powyżej i zaplanuj swoją podróż!
        </p>
      </div>
    </div>
  );
};


export default Home;
