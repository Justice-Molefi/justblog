"use client";

import Post from "../components/post";
import SearchBar from "../components/searchBar";
import styles from "./page.module.css";
import posts from "../mockdata/posts";
import { useEffect, useState } from "react";

export default function Home() {
  const searchablePosts = posts.map((post) => ({
    ...post,
    searchIndex: [post.title, post.tags.join(" "), post.content]
      .join(" ")
      .toLowerCase(),
  }));

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 

    return () => clearTimeout(timeout); 
  }, [query]);

  const filteredPosts = searchablePosts.filter((post) =>
    post.searchIndex.includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <h1>Nkopane Molefi</h1>
          <p>
            Software Developer
            <br />
            Writing about what I learn.
          </p>
        </div>
        <div className={styles.main}>
          <SearchBar onChange={setQuery} />
          <div className={styles.srollableDiv}>
            {filteredPosts.length === 0 && query.trim() != "" ? (
              <p>No posts found</p>
            ) : (
              filteredPosts.map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  date={post.date}
                  tags={post.tags}
                  content={post.content}
                  slug={post.slug}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
