
import { type ConfirmationDto } from "../types";
import "./ConfirmationCard.css";
import axios from "axios";
import env from "../env.json"

interface ConfirmationCardProps {
  confirmation: ConfirmationDto;
  onUpdate: (id: number) => void;
}

function ConfirmationCard({ confirmation, onUpdate }: ConfirmationCardProps) {
  return (
    <div className="confirmation--card">
      <p className="confirmation--card__menge">Menge: {confirmation.menge} </p>
      <p className="confirmation--card__email"> {confirmation.email} </p>
      <p className="confirmation--card__preis">
        Betrag: {confirmation.preis} €{" "}
      </p>
      <input
        className="confirmation--card__checkbox"
        type="checkbox"
        onClick={() => {
          try {
            axios.put(`http://${env.host}:8090/confirmations/${confirmation.id}`);
          } catch (error) {
            console.error("Error confirming confirmation:", error);
          }
          onUpdate(confirmation.id);
        }}
      />
    </div>
  );
}

export default ConfirmationCard;
