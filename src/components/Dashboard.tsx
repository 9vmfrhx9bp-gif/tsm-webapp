import React from "react";
import ConfirmationCard from "./ConfirmationCard";
import "./Dashboard.css";
import { type ConfirmationDto } from "../types";
import AreaChart from "./Chart";

interface DashboardProps {
  confirmations: ConfirmationDto[];
}

function Dashboard({ confirmations }: DashboardProps) {
  const filteredConfirmations = confirmations.filter(
    (confirmation) => confirmation.status === false,
  );
  const totalRevenue = confirmations.filter((confirmation) => confirmation.status === true).reduce((sum, confirmation) => sum + confirmation.preis, 0);



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
          <AreaChart />
        </div>
        <div className="dashboard--cash">
          <p className="dashboard--cash__total">Totaler Umsatz: {totalRevenue}€</p>


        </div>
      </div>
    </>
  );
}

export default Dashboard;
