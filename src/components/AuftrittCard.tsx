import React from "react";
import "./AuftrittCard.css";
import image from "../assets/hero.jpg";

interface AuftrittCardProps {
  auftritt: {
    title: string;
    date: string;
    location: string;
    description: string;
  };
}

function AuftrittCard({
  auftritt: { title, date, location, description },
}: AuftrittCardProps) {
  return (
    <div className="Card">
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
