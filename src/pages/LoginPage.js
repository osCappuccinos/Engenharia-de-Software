import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/home";
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      window.location.href = "/home";
    } catch (error) {
      alert("Erro ao entrar como convidado");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGuestLogin}>Entrar como Convidado</button>
    </div>
  );
};

export default LoginPage;