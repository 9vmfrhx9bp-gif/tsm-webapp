import "./Buttons.css";

interface DeleteButtonProps {
  id: number;

  onDelete: (id: number) => void;
}

interface EditButtonProps {
  title: string;
  onEdit: (title: string) => void;
}

export const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  return (
    <div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export const SettingsButton = ({ title, onEdit }: EditButtonProps) => {
  return (
    <div>
      <button
        onClick={() => onEdit(title)}
        type="button"
        className="btn btn-outline-secondary"
      >
        Change
      </button>
    </div>
  );
};
