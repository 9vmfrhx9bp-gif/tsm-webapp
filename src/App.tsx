import Homepage from "./components/Homepage";
import Auftritte from "./components/Auftritte";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Vip } from "./components/Vip";

function App() {
  const [auftritte, setAuftritt] = useState([
    {
      title: "Auftritt 1",
      date: "2024-07-01",
      location: "Sandersdorf",
      description: "Ein toller Auftritt in Berlin.",
    },
    {
      title: "Auftritt 2",
      date: "2024-08-15",
      location: "Günthersdorf",
      description: "Ein fantastischer Auftritt in Hamburg.",
    },
  ]);
  return (
    <div className="Container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/auftritte"
          element={<Auftritte auftritte={auftritte} />}
        />
        <Route path="/vip" element={<Vip auftritte={auftritte} />} />
      </Routes>
    </div>
  );
}

export default App;
