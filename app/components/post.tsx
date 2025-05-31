import Link from "next/link";
import styles from "./styles/post.module.css";
import AdminActionBar from "./adminActionBar";

interface PostProps {
  title: string;
  date: string;
  tags: string[];
  content: string;
  slug: string;
  isAdmin: boolean;
}


export default function Post({title , date, tags, content, slug, isAdmin} : PostProps) {
  return (
        <div className={styles.post}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>{title}</h2>
            { isAdmin ? <AdminActionBar/> : ''}
          </div>
          <div className={styles.meta}>Posted on {date}</div>
          <div className={styles.tags}>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.postContent}>
             {content.split(" ").slice(0, 20).join(" ")}...
          </p>
             <Link href={`/posts/${slug}`}>
            <span className={styles.readMore}>Read More</span>
          </Link>
    </div>
  );
}
