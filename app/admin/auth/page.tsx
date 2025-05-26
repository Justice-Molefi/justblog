import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div>
          <input className={styles.email} type="email" name="email" placeholder="Email"/>
        </div>
        <div>
          <input className={styles.password} type="password" name="password" placeholder="Password"/>
        </div>
        <div>
          <button className={styles.login} type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
