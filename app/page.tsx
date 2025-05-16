import Post from './components/post';
import styles from './page.module.css'; // 👈 Import the CSS module

export default function Home() {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.sidebar}> 
          <h1>Nkopane Molefi</h1>
          <p>
            Software Developer
            <br />
            Writing about what I learn.
          </p>
        </div>
        <div className={styles.main}>
          <Post/>
        </div>
      </div>
    </div>
  );
}
