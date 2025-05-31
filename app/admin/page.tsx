"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import styles from "./page.module.css";
import { createPost, logout } from "./actions";
import { PostDto } from "../dto/PostDto";

export default function App() {
  const [content, setVsetContent] = useState("**Hello world!!!**");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };

  const removeTag = (itemIndex: number) => {
    setTags(tags.filter((_, index) => index !== itemIndex));
  };

  const handleEditorChange = (content?: string) => {
    setVsetContent(content ?? "");
  };

  const handleSubmit = (formData: FormData) => {
    if (isFormValid()) {
      const clickedButton = formData.get("action");
      let publish = false;
      if (clickedButton === "publish") publish = true;

      const postDto: PostDto = {
        title: title,
        content: content,
        tags: tags,
        publish: publish,
      };
      createPost(postDto);
      return;
    }
    alert("form not valid");
  };

  const isFormValid = (): boolean => {
    if (title && content) return true;
    return false;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <a className={styles.viewPosts} href="/">View Posts</a>
        <div className={styles.logout} onClick={() => logout()}>Logout</div>
      </div>
      <form action={handleSubmit}>
        <div>
          <input
            className={styles.title}
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
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
            value={content}
            onChange={handleEditorChange}
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div>
          <button
            className={styles.save}
            name="action"
            value="save"
            type="submit"
          >
            Save
          </button>
          <button
            className={styles.publish}
            name="action"
            value="publish"
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
