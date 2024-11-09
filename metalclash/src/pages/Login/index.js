import { useContext, useState } from "react";
import { ContainerForm, ContainerMain } from "../../components/Container";
import { Form } from "../../components/Form";
import { LoginVerify } from "../../services/loginService";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, TitleForm } from "../../components/Text";

export default function Login() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputs = [
    {
      id: "username",
      name: "input-username",
      type: "text",
      value: username,
      label: "Username",
      onChange: (e) => setUsername(e.target.value),
    },
    {
      id: "password",
      name: "input-password",
      type: "password",
      value: password,
      label: "Password",
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const clearStates = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const response = LoginVerify(username, password);

    if (response) {
      setUser({ username, password });
      return navigate("/home");
    }

    alert("Email ou senha incorretos");
    clearStates();

    return;
  };

  return (
    <ContainerMain className="d-flex flex-column align-items-center">
      <ContainerForm>
        <TitleForm>Login</TitleForm>

        <Form inputs={inputs} onSubmit={handleLogin} />
      </ContainerForm>

      <Link to={'/register'}>Não tem cadastro ?</Link>
    </ContainerMain>
  );
}
