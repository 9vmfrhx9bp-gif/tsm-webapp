import "./AuftrittCard.css";
import { type Auftritt } from "../types";

interface AuftrittCardProps {
  auftritt: Auftritt;
  key: number;
}

function AuftrittCard({
  auftritt: { title, date, location, description, preis }

}: AuftrittCardProps) {
  return (
    <div className="Card" >
      <div className="card--text">
        <p className="card--item title">{title}</p>
        <p className="card--item location">{location}</p>
        <p className="card--item date">{date}</p>
        <p className="card--item description">{description}</p>
        <p className="card--item preis">Preis pro Ticket: {preis}€</p>

      </div>
    </div>
  );
}

export default AuftrittCard;
