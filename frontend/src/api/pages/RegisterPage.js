import { useState } from "react";
import { register } from "../api/auth";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data = await register(username, email, password);
    alert("Account created!");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
