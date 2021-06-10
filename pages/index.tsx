import styles from '../styles/Home.module.css'
import 'suneditor/dist/css/suneditor.min.css';
import React from 'react';
import dynamic from "next/dynamic";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
export default function Home() {
  const handleChange = (event: any) => {
    console.log(event);  
  }
 
  return (
    <div className={styles.container}>
      <p> My Other Contents </p>
      <SunEditor
        // setContents="My contents"
        onChange={handleChange}
        setDefaultStyle="height: auto"
        setOptions={{
          buttonList: [
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "list",
              "align",
              "fontSize",
              "formatBlock",
              "table",
              "image",
              "video"
            ]
          ]
        }}
      />
    </div>
  )
}
