import './CurratedPicks.css'
import curratedItem from "./currateditems";
import OneCard from "./OneCard";
import { Link } from 'react-router-dom';

const CurratedPicks = () => {
  return (
    <div className="CurratedPicks-section">
      <h1>Curated Picks</h1>
      <div className="currated-cards">
        {curratedItem.map((item) => {
          return (
          <Link key={item.id} to={`/${item.path}`}><OneCard  name={item.name} image={item.image} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default CurratedPicks;
