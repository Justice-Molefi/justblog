"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import styles from "./page.module.css";

export default function App() {
  const [value, setValue] = useState("**Hello world!!!**");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };

  const removeTag = (itemIndex: number) => {
    setTags(tags.filter((_, index) => index !== itemIndex));
  };

  const handleChange = (value?: string) => {
    setValue(value ?? "");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.viewPosts}>View Posts</div>
        <div className={styles.logout}>Logout</div>
      </div>
      <div>
        <input className={styles.title} type="text" placeholder="title" />
      </div>
      <div>
        <input
          className={styles.tags}
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="type tag, then enter"
          onKeyDown={(e) => handleAddTag(e)}
        />
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              <p>{tag}</p>
              <div className={styles.remove} onClick={() => removeTag(index)}>
                x
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="editorContainer">
        <MDEditor
          value={value}
          onChange={handleChange}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div>
        <button className={styles.save} type="submit">
          Save
        </button>
        <button className={styles.publish} type="submit">
          Publish
        </button>
      </div>
    </div>
  );
}
