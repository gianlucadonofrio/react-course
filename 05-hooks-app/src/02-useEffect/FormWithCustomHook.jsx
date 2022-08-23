import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
 
  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        placeholder="Correo"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm}> Borrar</button>
    </>
  );
};
