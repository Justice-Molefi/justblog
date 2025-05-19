import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className="email">
          <input type="email" name="email" />
        </div>
        <div className="password">
          <input type="password" name="password" />
        </div>
        <div className="login">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
