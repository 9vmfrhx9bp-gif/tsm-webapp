import React from "react";
import AuftrittCard from "./AuftrittCard";
import "./Auftritte.css";
import { type Auftritt } from "../types"

interface AuftritteProps {
  auftritte: Auftritt[];
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
