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

  if (content.length > 0) {
    if (content[0].startsWith("<!DOCTYPE html>")) {
      console.error(`Failed to fetch ${path}`);
      return [];
    }
  }

  return content;
}
