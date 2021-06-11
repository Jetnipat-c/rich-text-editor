import styles from '../styles/Home.module.css'
import 'suneditor/dist/css/suneditor.min.css';
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import Content from '../components/Contetnt';
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
export default function Home() {
  const [content,setContent] = useState("")
  const handleChange = (event: any) => { 
    setContent(event)
  }
 
  return (
    <div className={styles.container}>
      <div style={{textAlign:"center"}}>{content}</div>
      
      <Content content={content} />
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
      test
    </div>
  )
}
