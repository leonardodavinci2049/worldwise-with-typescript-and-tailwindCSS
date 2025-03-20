import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import ButtonDefault from "../components/ButtonDefault";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  function handleSubmit() {
    // Aqui você poderia adicionar uma lógica de autenticação real
   // Navigate("/app");
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            className="text-black"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            className="text-black"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
        <ButtonDefault type="primary" onClick={() => null}>
        Login
        </ButtonDefault>
        </div>
      </form>
    </main>
  );
}
