import { useEffect, useState } from "react";
import Papa from "papaparse";

export interface ScoreTableRow {
  id: string;
  id_format: string;
  [key: string]: string | number; // Dynamic keys for databases
  score: number;
}

export default function useCsv<T>(path: string) {
  let [data, setData] = useState<T[]>([{} as T]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(path);
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            setData(results.data as T[]);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing CSV:", error);
      }
    }

    fetchData();
  }, [path, setData]);

  return data;
}
