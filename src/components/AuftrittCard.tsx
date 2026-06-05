import "./AuftrittCard.css";
import { type Auftritt } from "../types";

interface AuftrittCardProps {
  auftritt: Auftritt;
  key: number;
}

function AuftrittCard({
  auftritt: { title, date, location, description },
  key,
}: AuftrittCardProps) {
  return (
    <div className="Card" key={key}>
      <div className="card--text">
        <p className="card--item title">{title}</p>
        <p className="card--item location">{location}</p>
        <p className="card--item date">{date}</p>
        <p className="card--item description">{description}</p>
      </div>
    </div>
  );
}

export default AuftrittCard;
