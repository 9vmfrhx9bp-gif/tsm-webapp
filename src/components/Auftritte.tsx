import React from "react";
import AuftrittCard from "./AuftrittCard";
import "./Auftritte.css";

interface auftritt {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface AuftritteProps {
  auftritte: auftritt[];
}

function Auftritte({ auftritte }: AuftritteProps) {
  return (
    <div className="auftritte--container">
      {auftritte.map((auftritt, index) => (
        <AuftrittCard key={index} auftritt={auftritt} />
      ))}
    </div>
  );
}

export default Auftritte;
