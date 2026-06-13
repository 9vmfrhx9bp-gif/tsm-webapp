import React from "react";
import ConfirmationCard from "./ConfirmationCard";
import "./Dashboard.css";
import { type ConfirmationDto } from "../types";

interface DashboardProps {
  confirmations: ConfirmationDto[];
}

function Dashboard({ confirmations }: DashboardProps) {
  const filteredConfirmations = confirmations.filter(
    (confirmation) => confirmation.status === false,
  );
  return (
    <>
      <div className="dashboard">
        <div className="dashboard--overview">
          {filteredConfirmations.map((confirmation) => (
            <ConfirmationCard
              key={confirmation.id}
              confirmation={confirmation}
            />
          ))}
        </div>
        <div className="dashboard--chart">
          <h1>Chart</h1>
        </div>
        <div className="dashboard--cash">
          <h1>Cash</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
