import ConfirmationCard from "./ConfirmationCard";
import "./Dashboard.css";
import { type ConfirmationDto } from "../types";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

interface DashboardProps {
  confirmations: ConfirmationDto[];
}

function Dashboard({ confirmations }: DashboardProps) {
  const [overviewData, setData] = useState(() =>
    confirmations.filter((confirmation) => confirmation.status === false),
  );
  const [chartData, setChartData] = useState(() =>
    confirmations.filter((confirmation) => confirmation.status === true),
  );

  const updateOverviewData = (id: number) => {
    const newData = overviewData.filter((data) => data.id != id);
    setData(newData);
    const newChartData = confirmations.find((data) => data.id === id);
    setChartData([...chartData, newChartData]);
  };

  const totalRevenue = chartData.reduce(
    (sum, confirmation) => sum + confirmation.preis,
    0,
  );
  const processedPayments = chartData.reduce(
    (acc, payment) => {
      if (acc[payment.auftrittName]) {
        acc[payment.auftrittName] += payment.menge;
      } else {
        acc[payment.auftrittName] = payment.menge;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  const data = Object.entries(processedPayments).map(([name, menge]) => ({
    name,
    menge,
  }));

  return (
    <>
      <div className="dashboard">
        <div className="dashboard--overview">
          {overviewData.map((confirmation) => (
            <ConfirmationCard
              key={confirmation.id}
              confirmation={confirmation}
              onUpdate={updateOverviewData}
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
                  data: data.map((confirmation) => confirmation.menge),
                },
              ],
            }}
          />
        </div>
        <div className="dashboard--cash">
          <p className="dashboard--cash__total">
            Totaler Umsatz: {totalRevenue}€
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
