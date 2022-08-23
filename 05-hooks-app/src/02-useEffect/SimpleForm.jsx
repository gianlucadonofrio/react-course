import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "gian",
    email: "gian.donofrio@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "gian2" && <Message />}

      <input
        type="email"
        placeholder="gian@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
