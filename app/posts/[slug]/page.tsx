import posts from "@/app/components/fakedata/posts";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.container}>
      {/* <nav className={styles.breadcrumb}>
        <a href="/">Home</a> /{post.title}
      </nav> */}
      <div className={styles.post}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.meta}>Posted on {post.date}</div>
        <div className={styles.tags}>
          {post.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.postContent}>{post.content}</p>
      </div>
    </div>
  );
}
