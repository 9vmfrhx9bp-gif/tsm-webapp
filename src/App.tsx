import Homepage from "./components/Homepage";
import Auftritte from "./components/Auftritte";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Vip } from "./components/Vip";
import { type Auftritt } from "./types"



function App() {
  const [auftritte, setAuftritt] = useState<Auftritt[]>([]);

  const handleSafeData = (newAuftritt: Auftritt) => {
    setAuftritt([...auftritte, newAuftritt])
  }



  return (
    <div className="Container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/auftritte"
          element={<Auftritte auftritte={auftritte} />}
        />
        <Route path="/vip" element={<Vip auftritte={auftritte} safeData={handleSafeData} />} />
      </Routes>
    </div>
  );
}

export default App;
