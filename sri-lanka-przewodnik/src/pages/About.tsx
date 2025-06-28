import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div
        className="about-hero"
        style={{
          background: `url("/images/sri-lanka-hero.jpg") center/cover no-repeat`,
        }}
      >
        <h1>O Sri Lance</h1>
      </div>

      <section className="about-section">
        <h2>🌴 Krótko o kraju</h2>
        <p>
          Sri Lanka, znana jako „Perła Oceanu Indyjskiego”, zachwyca różnorodnością krajobrazów: od złotych plaż,
          przez bujne dżungle, malownicze wzgórza herbaciane i majestatyczne wodospady, aż po górskie szczyty. Kraj ten jest
          świadkiem tysięcy lat historii, fascynujących legend, buddyjskich świątyń i kolonialnych wpływów. Tutejsza kultura jest barwna i gościnna,
          a różnorodność etniczna i religijna sprawia, że Sri Lanka to prawdziwy tygiel tradycji i zwyczajów, który zachwyca na każdym kroku.
        </p>
      </section>

      <section className="about-section">
        <h2>📌 Najważniejsze informacje</h2>
        <ul>
          <li><span className="label">Stolica: </span>Sri Dźajawardanapura Kotte (oficjalna) / Kolombo (gospodarcza)</li>
          <li><span className="label">Ludność: </span>ok. 22 mln mieszkańców</li>
          <li><span className="label">Języki: </span>syngaleski, tamilski, angielski</li>
          <li><span className="label">Waluta: </span>rupia lankijska (LKR)</li>
          <li><span className="label">Religie: </span>buddyzm, hinduizm, islam, chrześcijaństwo</li>
          <li><span className="label">Klimat: </span>równikowy, monsunowy</li>
          <li><span className="label">Czas: </span>UTC+5:30</li>
          <li><span className="label">Kod telefoniczny: </span>+94</li>
          <li><span className="label">Najlepszy czas podróży: </span>grudzień-marzec (południe i zachód) oraz maj-wrzesień (wschód)</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🏞 Najpiękniejsze miejsca do zobaczenia</h2>
        <ul>
          <li><span className="highlight">Sigiriya</span> – starożytna twierdza na szczycie skalnego monolitu, zwana „Lwią Skałą”.</li>
          <li><span className="highlight">Ella</span> – malownicza miejscowość z plantacjami herbaty i słynnym Mostem Dziewięciu Łuków.</li>
          <li><span className="highlight">Mirissa</span> – tropikalna plaża idealna do surfowania i obserwacji wielorybów.</li>
          <li><span className="highlight">Yala</span> – park narodowy znany z lampartów i dzikiej przyrody.</li>
          <li><span className="highlight">Polonnaruwa</span> – starożytne miasto z imponującymi ruinami.</li>
          <li><span className="highlight">Galle</span> – kolonialne miasto z zabytkowym fortem wpisanym na listę UNESCO.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🎭 Kultura i tradycje</h2>
        <p>
          Sri Lanka słynie z barwnych festiwali, takich jak Esala Perahera w Kandy – spektakularna parada z udziałem tańczących artystów
          i ozdobionych słoni. Tutejsza kultura to również bogata sztuka, muzyka i rękodzieło – w tym tradycyjne maski i batiki.
          Buddyzm odgrywa ogromną rolę w codziennym życiu, a gościnność mieszkańców jest legendarna.
        </p>
      </section>

      <section className="about-section">
        <h2>🍛 Kuchnia lankijska</h2>
        <p>
          Smaki Sri Lanki są wyraziste i aromatyczne – od pikantnych curry z ryżem, przez kottu roti, dhal (zupę z soczewicy), po hoppers
          (chrupiące naleśniki) i lamprais (ryż pieczony w liściu bananowca). Popularne są świeże owoce morza i tropikalne owoce, a cejlońska herbata znana jest na całym świecie.
        </p>
      </section>

      <section className="about-section">
        <h2>🌿 Przyroda i fauna</h2>
        <p>
          Sri Lanka to raj dla miłośników przyrody: spotkasz tu słonie, lamparty, krokodyle i niezliczone gatunki ptaków. Wyspa słynie też z pięknych ogrodów botanicznych, wodospadów i rezerwatów przyrody, które chronią unikalne gatunki roślin i zwierząt.
        </p>
      </section>

      <section className="about-section">
        <h2>🏖 Plaże i sporty wodne</h2>
        <p>
          Od spokojnych lagun Bentoty, przez surferskie fale w Arugam Bay, po turkusowe wody Unawatuny – Sri Lanka to raj dla plażowiczów i miłośników sportów wodnych. Popularne są nurkowanie, snorkeling, wędkowanie i rejsy na obserwację wielorybów.
        </p>
      </section>

      <section className="about-section">
        <h2>✈️ Jak się dostać?</h2>
        <p>
          Największe lotnisko – Bandaranaike International Airport (CMB) – znajduje się 30 km od Kolombo. Na Sri Lankę można dolecieć z większości dużych miast Europy z jedną przesiadką. Do poruszania się po wyspie warto skorzystać z pociągów, tuk-tuków lub wynająć samochód.
        </p>
      </section>
    </section>
  );
};

export default About;
