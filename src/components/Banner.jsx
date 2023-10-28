import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src="./src/assets/mapworld.jpg" alt="mapworld" />;
      <div className="buttons">
        <button className="btn-continents afrique" onClick="">
          AFRIQUE
        </button>
        ;<button className="btn-continents asie">ASIE</button>;
        <button className="btn-continents europe">EUROPE</button>;
        <button className="btn-continents ameriqueNord">
          AMERIQUE DU NORD
        </button>
        ;<button className="btn-continents ameriqueSud">AMERIQUE DU SUD</button>
        ;
      </div>
    </div>
  );
}
