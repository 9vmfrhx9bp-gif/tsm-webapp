import React from "react";
import Auftritte from "./Auftritte";
import "./Vip.css";

interface Auftritt {
  title?: string;
  location?: string;
  date?: string;
  description?: string;
}

export const Vip = ({ auftritte }) => {
  const auftritt: Auftritt = {};

  return (
    <div className="vip--container">
      <div className="vip--auftritte">
        <h2 className="vip--heading--auftri"> Anstehende Auftritte</h2>
        <Auftritte auftritte={auftritte} />
      </div>
      <div className="vip--formular">
        <h2>Auftritt anlegen</h2>
        <form className="vip--form">
          <input type="text" placeholder="Title" required />
          <input type="text" placeholder="Location" required />
          <input type="text" placeholder="date" required />
          <input type="text" placeholder="description" required />
          <button type="submit">speichern</button>
        </form>
      </div>
    </div>
  );
};
