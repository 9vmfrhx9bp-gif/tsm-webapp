
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { type LoginRequest } from "../types";
import axios from "axios";
import Swal from "sweetalert2";
import env from "../env.json";

interface PageProps {
  authenticationFunction: () => void;
}

function LoginPage({ authenticationFunction }: PageProps) {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const onSubmit = (data: LoginRequest) => {
    axios
      .post(`http://${env.host}:8090/login`, data)
      .then((response) => {
        if (response.status == 200) {
          authenticationFunction();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Name oder Passwort falsch",
          text: "Frag den Admin um Hilfe",
        });
      });
  };

  return (
    <div className="LoginPage--container">
      <form onSubmit={handleSubmit(onSubmit)} className="login--form">
        <input
          {...register("username")}
          className="text__input"
          placeholder="Username"
          type="text"
        />
        <input
          {...register("password")}
          className="text__input"
          placeholder="Password"
          type="password"
        />
        <button className="btn btn-primary btn--login">login</button>
      </form>
    </div>
  );
}

export default LoginPage;
