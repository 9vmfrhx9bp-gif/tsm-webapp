
import ConfirmationCard from "./ConfirmationCard";
import "./Dashboard.css";
import { type ConfirmationDto } from "../types";
import { Chart as ChartJS } from "chart.js/auto"
import { Bar } from "react-chartjs-2"



interface DashboardProps {
  confirmations: ConfirmationDto[];
}

function Dashboard({ confirmations }: DashboardProps) {



  const filteredConfirmations = confirmations.filter(
    (confirmation) => confirmation.status === false,
  );
  const totalRevenue = confirmations.filter((confirmation) => confirmation.status === true).reduce((sum, confirmation) => sum + confirmation.preis, 0);
  const processedPayments = confirmations.filter((confirmation) => confirmation.status === true).reduce((acc, payment) => {
    // Falls der Auftritt bereits im Akkumulator existiert, addiere die Menge
    if (acc[payment.auftrittName]) {
      acc[payment.auftrittName] += payment.menge;
    } else {
      // Sonst initialisiere mit der aktuellen Menge
      acc[payment.auftrittName] = payment.menge;
    }
    return acc;
  }, {} as Record<string, number>);

  // Umwandeln in ein Array von Objekten
  const data = Object.entries(processedPayments).map(([name, menge]) => ({
    name,
    menge,
  }));



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

          <Bar
            data={{
              labels: data.map((confirmation) => confirmation.name),
              datasets: [
                {
                  label: "Verkauft",
                  data: data.map((confirmation) => confirmation.menge)
                }
              ]
            }}
          />
        </div>
        <div className="dashboard--cash">
          <p className="dashboard--cash__total">Totaler Umsatz: {totalRevenue}€</p>


        </div>
      </div>
    </>
  );
}

export default Dashboard;
