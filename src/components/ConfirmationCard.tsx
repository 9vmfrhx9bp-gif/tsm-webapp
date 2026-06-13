import React from "react";
import { type ConfirmationDto } from "../types";
import "./ConfirmationCard.css";

interface ConfirmationCardProps {
  confirmation: ConfirmationDto;
}

function ConfirmationCard({ confirmation }: ConfirmationCardProps) {
  return (
    <div className="confirmation--card">
      <p className="confirmation--card__menge">menge: {confirmation.menge} </p>
      <p className="confirmation--card__email">Email: {confirmation.email} </p>
      <p className="confirmation--card__preis">Preis: {confirmation.preis} </p>
    </div>
  );
}

export default ConfirmationCard;
