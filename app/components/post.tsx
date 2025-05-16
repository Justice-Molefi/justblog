import Link from "next/link";
import posts from "./fakedata/posts";
import styles from "./post.module.css";

export default function Post() {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.meta}>Posted on {post.date}</div>
          <div className={styles.tags}>
            {post.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.postContent}>
             {post.content.split(" ").slice(0, 20).join(" ")}...
          </p>
             <Link href={`/posts/${post.slug}`}>
            <span className={styles.readMore}>Read More</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
