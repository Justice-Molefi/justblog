'use client'

import { useState } from "react";
import { login } from "../actions";
import styles from "./page.module.css";

export default function Login() {
  const [error, setError] = useState("");

  const handleLogin = async (formData: FormData) => {
    const errorMessage: string = await login(formData);
    if (errorMessage) {
      setError(errorMessage);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles.formContainer}>
      {error ? <div className={styles.errorMessage}>{error}</div> : ''}
      <form className={styles.form}>
        <div>
          <input
            className={styles.email}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            className={styles.password}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button formAction={handleLogin} className={styles.login} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
