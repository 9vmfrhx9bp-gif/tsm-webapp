import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AuftrittCard from "./AuftrittCard";
import Dashboard from "./Dashboard";
import { DeleteButton, SettingsButton } from "./Buttons";
import "./Vip.css";
import { type Auftritt, type ConfirmationDto } from "../types";

interface VipProps {
  auftritte: Auftritt[];
  safeData: (data: Auftritt) => void;
  onDelete: (id: number) => void;
  onEdit: (title: string) => void;
  Default: Auftritt;
  confirmations: ConfirmationDto[];
}

export const Vip = ({
  auftritte,
  safeData,
  onDelete,
  onEdit,
  Default,
  confirmations,
}: VipProps) => {
  const { register, handleSubmit, reset } = useForm<Auftritt>({
    defaultValues: Default,
  });

  useEffect(() => {
    reset(Default);
  }, [Default, reset]);

  return (
    <div className="vip--container">
      <div className="vip--auftritte">
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
                  <AuftrittCard auftritt={auftritt} key={auftritt.id} />
                </td>

                <td>
                  <DeleteButton id={index} onDelete={onDelete} />
                  <SettingsButton title={auftritt.title} onEdit={onEdit} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="vip--formular">
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
            placeholder="Date"
            required
          />
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
            required
          />
          <input
            {...register("preis")}
            type="number"
            placeholder="Preis pro Ticket"
            required
          />
          <button type="submit">speichern</button>
        </form>
      </div>
      <div className="vip--dashboard">
        <Dashboard confirmations={confirmations} />
      </div>
    </div>
  );
};
