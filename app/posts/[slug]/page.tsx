import posts from "@/app/mockdata/posts";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <a href="/">Go Back 🦈</a>
      </nav>
      <div className={styles.postContainer}>
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
    </div>
  );
}
