import styles  from './styles/adminActionBar.module.css'

export default function AdminActionBar() {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.edit}>edit</button>
      <button className={styles.delete}>delete</button>
      <button className={styles.unpublish}>unpublish</button>
    </div>
  );
}
