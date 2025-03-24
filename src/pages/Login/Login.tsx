import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import useFakeAuth from "../../contexts/auth/useFakeAuth";
import PageNav from "../../common-components/PageNav";
import ButtonDefault from "../../common-components/ButtonDefault";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("@@@2025$$$");

  const { login, isAuthenticated } = useFakeAuth();
  const navigate = useNavigate();
  

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("LOGIN", email, password);
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            className="text-black font-bold"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            className="text-black font-bold"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
        <ButtonDefault type="primary" onClick={() => null}>Login</ButtonDefault>
        </div>
      </form>
    </main>
  );
}
