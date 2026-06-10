import React from "react";
import "./Buchen.css";
import { useForm } from "react-hook-form";
import {
  type AddConfirmationRequest,
  type Auftritt,
  type ConfirmationDto,
} from "../types";
import { useState, useEffect } from "react";
import axios from "axios";

interface BuchenProps {
  auftritte: Auftritt[];
  safeConfirmation: (data: ConfirmationDto) => void;
}

function Buchen({ auftritte, safeConfirmation }: BuchenProps) {
  const { register, handleSubmit, reset } = useForm<AddConfirmationRequest>();

  const [selectedAuftritt, setSelectedAuftritt] = useState<string>("");
  const [menge, setMenge] = useState<number>(0);
  const [preis, setPreis] = useState<number>(0);

  useEffect(() => {
    const auftritt = auftritte.find((a) => a.title === selectedAuftritt);
    if (auftritt && menge >= 0) {
      setPreis(auftritt.preis * menge);
    }
  }, [selectedAuftritt, menge]);

  const onSubmit = (data: AddConfirmationRequest) => {
    data.preis = preis;
    try {
      axios
        .post("http://localhost:8080/confirmations", data)
        .then((response) => {
          safeConfirmation(response.data);
          setPreis(0);
          reset();
        });
    } catch (error) {
      console.error("Error posting confirmation:", error);
    }
  };

  return (
    <div className="buchen__wrapper">
      <div className="buchen__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nachname" {...register("nachname")} />
          <input type="text" placeholder="Vorname" {...register("vorname")} />
          <input type="email" placeholder="E-Mail" {...register("email")} />
          <select
            {...register("auftrittName")}
            onChange={(e) => setSelectedAuftritt(e.target.value)}
          >
            <option value="">Auftritt auswählen...</option>
            {auftritte.map((auftritt) => (
              <option key={auftritt.id} value={auftritt.title}>
                {auftritt.title}
              </option>
            ))}
          </select>
          <input type="text" placeholder="Straße" {...register("straße")} />
          <input
            type="number"
            placeholder="Hausnummer"
            {...register("hausnummer")}
          />
          <input
            type="text"
            placeholder="Postleitzahl"
            {...register("postleitzahl")}
          />
          <input type="text" placeholder="Stadt" {...register("stadt")} />
          <input
            type="number"
            placeholder="Menge"
            {...register("menge")}
            onChange={(e) => setMenge(Number(e.target.value))}
          />
          <p>Preis: {preis}€</p>

          <button type="submit">Buchen</button>
        </form>
      </div>
    </div>
  );
}

export default Buchen;
