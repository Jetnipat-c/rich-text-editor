import React, { useEffect } from "react";
interface IContent {
  content?: string |React.ReactNode;
}

const Content = ({ content }: IContent) => {
  return (
    <>
   <div dangerouslySetInnerHTML={{__html: `${content}`}} />
  </>
  );
};
export default Content;
