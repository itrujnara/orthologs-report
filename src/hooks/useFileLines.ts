import { useEffect, useState } from "react";

export default function useFileLines(path: string) {
  let [content, setContent] = useState([""]);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((res) => res.split("\n"))
      .then((res) => res.filter((line) => line !== ""))
      .then((res) => setContent(res));
  }, [setContent]);

  return content;
}
