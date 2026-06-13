import React from "react";
import { type ConfirmationDto } from "../types";
import "./ConfirmationCard.css";
import axios from "axios";

interface ConfirmationCardProps {
  confirmation: ConfirmationDto;
}

function ConfirmationCard({ confirmation }: ConfirmationCardProps) {
  return (
    <div className="confirmation--card">
      <p className="confirmation--card__menge">Menge: {confirmation.menge} </p>
      <p className="confirmation--card__email"> {confirmation.email} </p>
      <p className="confirmation--card__preis">Betrag: {confirmation.preis} € </p>
      <input className="confirmation--card__checkbox" type="checkbox" onClick={() => {
        try { axios.put(`http://localhost:8080/confirmations/${confirmation.id}`); window.location.reload(); } catch (error) {
          console.error("Error confirming confirmation:", error);
        }
      }} />
    </div>
  );
}

export default ConfirmationCard;
