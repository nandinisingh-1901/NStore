import { useNavigate } from "react-router-dom";
import "./OneCard.css";

const OneCard = ({ name, image }) => {
  const navigate = useNavigate();  
  return (
    <div className="one-card">
      <img src={image} alt={name} height={300}width={300} className="currated-image"/>
      <div className="currated-name">{name}</div>
    </div>
  );
};

export default OneCard;
