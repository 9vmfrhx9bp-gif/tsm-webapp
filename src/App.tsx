import Homepage from "./components/Homepage";
import Auftritte from "./components/Auftritte";
import Navbar from "./components/Navbar";
import Buchen from "./components/Buchen";
import "bootstrap/dist/css/bootstrap.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Vip } from "./components/Vip";
import { type Auftritt, type Editable, type ConfirmationDto } from "./types";
import Swal from "sweetalert2";
import axios from "axios";

function App() {
  const Default: Auftritt = {
    title: "",
    location: "",
    date: "",
    description: "",
    id: 0,
    preis: 0,
  };

  const [auftritte, setAuftritt] = useState<Auftritt[]>([]);
  const [edit, setEdit] = useState<Editable>({ title: "", edit: false });
  const [defaultForm, setDefault] = useState<Auftritt>(Default);
  const [confirmation, setConfirmation] = useState<ConfirmationDto[]>([]);

  useEffect(() => {
    axios
      .get<Auftritt[]>("http://localhost:8080/auftritte")
      .then((response) => {
        setAuftritt(response.data);
      });
    axios
      .get<ConfirmationDto[]>("http://localhost:8080/confirmations")
      .then((response) => {
        setConfirmation(response.data);
      });
  }, []);

  const handleSafeData = (newAuftritt: Auftritt) => {

    if (edit.title === newAuftritt.title && edit.edit) {
      try {
        axios
          .put("http://localhost:8080/auftritte", newAuftritt)
          .then((response) => {
            newAuftritt.id = response.data.id;
          });
      } catch (error) {
        console.error("Error updating data:", error);
      }
      updateData(newAuftritt);
      return;
    }
    if (auftritte.some((auftritt) => auftritt.title == newAuftritt.title)) {
      return Swal.fire({
        title: "Error!",
        text: "Der Auftritt existiert bereits",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    try {
      axios
        .post("http://localhost:8080/auftritte", newAuftritt)
        .then((request) => {
          setAuftritt([...auftritte, request.data]);
          console.log(request.data);
        });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const deleteData = (index: number) => {
    const key = auftritte[index].id;
    try {
      axios.delete("http://localhost:8080/auftritte/" + key);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    setAuftritt(
      auftritte.filter((value) => {
        return auftritte.indexOf(value) !== index;
      }),
    );
  };

  const onEdit = (title: string) => {
    setEdit({ title: title, edit: true });
    const update = auftritte.find((auftritt) => auftritt.title === title);
    if (update !== undefined) setDefault(update);
  };

  const updateData = (updateAuftritt: Auftritt) => {
    setAuftritt([
      ...auftritte.filter(
        (auftritt) => auftritt.title !== updateAuftritt.title,
      ),
      updateAuftritt,
    ]);
    setEdit({ title: "", edit: false });
    setDefault(Default);
    return;
  };

  const safeConfirmation = (data: ConfirmationDto) => {
    setConfirmation([...confirmation, data]);
  };

  return (
    <div className="Container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/auftritte"
          element={<Auftritte auftritte={auftritte} />}
        />
        <Route
          path="/vip"
          element={
            <Vip
              onDelete={deleteData}
              auftritte={auftritte}
              safeData={handleSafeData}
              onEdit={onEdit}
              Default={defaultForm}
              confirmations={confirmation}
            />
          }
        />
        <Route
          path="/buchen"
          element={
            <Buchen auftritte={auftritte} safeConfirmation={safeConfirmation} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
