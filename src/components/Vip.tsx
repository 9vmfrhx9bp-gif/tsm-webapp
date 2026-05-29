import { useForm } from "react-hook-form";
import Auftritte from "./Auftritte";
import AuftrittCard from "./AuftrittCard";
import { DeleteButton, SettingsButton } from "./Buttons";
import "./Vip.css";
import { type Auftritt } from "../types";

interface VipProps {
  auftritte: Auftritt[];
  safeData: (data: Auftritt) => void;
  onDelete: (id: number) => void;
}

export const Vip = ({ auftritte, safeData, onDelete }: VipProps) => {
  const { register, handleSubmit, reset } = useForm<Auftritt>();

  return (
    <div className="vip--container">
      <div className="vip--auftritte">
        <h2 className="vip--heading--auftri"> Anstehende Auftritte</h2>
        <table className="table table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Auftritte</th>
              <th scope="col">Bearbeiten</th>
            </tr>
          </thead>
          <tbody>
            {auftritte.map((auftritt, index) => (
              <tr>
                <td>
                  <AuftrittCard auftritt={auftritt} key={index} id={index} />
                </td>
                <td>
                  <DeleteButton id={index} onDelete={onDelete} />
                  <SettingsButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="vip--formular">
        <h2>Auftritt anlegen</h2>
        <form
          onSubmit={handleSubmit((data) => {
            safeData(data);
            reset();
          })}
          className="vip--form"
        >
          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            required
          />
          <input
            {...register("location")}
            type="text"
            placeholder="Location"
            required
          />
          <input
            {...register("date")}
            type="text"
            placeholder="date"
            required
          />
          <input
            {...register("description")}
            type="text"
            placeholder="description"
            required
          />
          <button type="submit">speichern</button>
        </form>
      </div>
    </div>
  );
};
