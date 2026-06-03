import Homepage from "./components/Homepage";
import Auftritte from "./components/Auftritte";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Vip } from "./components/Vip";
import { type Auftritt, type Editable } from "./types";
import Swal from 'sweetalert2'
import axios from "axios";


function App() {

  const Default: Auftritt = { title: "", location: "", date: "", description: "" };

  const [auftritte, setAuftritt] = useState<Auftritt[]>([]);
  const [edit, setEdit] = useState<Editable>({ title: "", edit: false });
  const [defaultForm, setDefault] = useState<Auftritt>(Default)

  useEffect(() => {
    axios.get<Auftritt[]>('http://localhost:8080/auftritte')
      .then((response) => {
        setAuftritt(response.data);
        console.log(response.data)
      })

  }, [])

  const handleSafeData = (newAuftritt: Auftritt) => {
    if (edit.title === newAuftritt.title && edit.edit) {
      updateData(newAuftritt)
      return

    }
    if (auftritte.some(auftritt => auftritt.title == newAuftritt.title)) {
      return Swal.fire({
        title: 'Error!',
        text: 'Der Auftritt existiert bereits',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    }

    setAuftritt([...auftritte, newAuftritt]);
  };

  const deleteData = (id: number) => {
    setAuftritt(
      auftritte.filter((value) => {
        return auftritte.indexOf(value) != id;
      }),
    );
  };

  const onEdit = (title: string) => {
    setEdit({ title: title, edit: true })
    const update = auftritte.find(auftritt => auftritt.title === title)
    if (update !== undefined) setDefault(update)
    console.log("edit mode", defaultForm)

  }

  const updateData = (updateAuftritt: Auftritt) => {
    setAuftritt([...auftritte.filter(auftritt => auftritt.title !== updateAuftritt.title), updateAuftritt])
    setEdit({ title: "", edit: false })
    setDefault(Default)
    return


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
        <Route
          path="/vip"
          element={
            <Vip
              onDelete={deleteData}
              auftritte={auftritte}
              safeData={handleSafeData}
              onEdit={onEdit}
              Default={defaultForm}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
