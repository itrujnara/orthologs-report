import { useEffect, useState } from "react";

export default function useFasta(filename: string) {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => {
        setLines(text.split("\n"));
      });
  }, [filename]);

  let records = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(">")) {
      let record = { header: lines[i].slice(1).split("/")[0], sequence: "" };
      i++;
      while (i < lines.length && !lines[i].startsWith(">")) {
        record.sequence += lines[i];
        i++;
      }
      records.push(record);
      i--;
    }
  }

  return records;
}
