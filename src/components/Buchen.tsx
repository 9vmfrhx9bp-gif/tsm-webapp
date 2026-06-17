
import "./Buchen.css";
import { useForm } from "react-hook-form";
import {
  type AddConfirmationRequest,
  type Auftritt,
  type ConfirmationDto,
} from "../types";
import { useState, useEffect } from "react";
import axios from "axios";
import env from "../env.json"

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
      axios.post(`http://${env.host}:8090/confirmations`, data).then((response) => {
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
          <input
            className="text__input"
            type="text"
            placeholder="Nachname"
            {...register("nachname")}
          />
          <input
            className="text__input"
            type="text"
            placeholder="Vorname"
            {...register("vorname")}
          />
          <input
            className="text__input"
            type="email"
            placeholder="E-Mail"
            {...register("email")}
          />
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
          <input
            className="text__input"
            type="text"
            placeholder="Straße"
            {...register("straße")}
          />
          <input
            className="text__input"
            type="number"
            placeholder="Hausnummer"
            {...register("hausnummer")}
          />
          <input
            className="text__input"
            type="text"
            placeholder="Postleitzahl"
            {...register("postleitzahl")}
          />
          <input
            className="text__input"
            type="text"
            placeholder="Stadt"
            {...register("stadt")}
          />
          <input
            className="text__input"
            type="number"
            placeholder="Menge"
            {...register("menge")}
            onChange={(e) => setMenge(Number(e.target.value))}
          />
          <div className="buchen--commit">
            <p className="buchen--preis">Preis: {preis}€</p>

            <button className="btn btn-primary" type="submit">
              Bestellen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Buchen;
