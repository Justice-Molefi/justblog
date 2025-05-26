"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import styles from "./page.module.css";

export default function App() {
  const [value, setValue] = useState("**Hello world!!!**");
  const handleChange = (value?: string) => {
    setValue(value ?? "");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.viewPosts} >View Posts</div>
        <div className={styles.logout} >Logout</div>
      </div>
      <div className="editorContainer">
        <MDEditor
          value={value}
          onChange={handleChange}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      
       <div>
          <button className={styles.save} type="submit">Save</button>
          <button className={styles.publish} type="submit">Publish</button>
       </div>

    </div>
  );
}
