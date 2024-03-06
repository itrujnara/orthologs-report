import useFileLines from "./useFileLines";

export default function useYamlEntry(path: string, label: string) {
  const file = useFileLines(path);
  const entry = file.find((line) => line.startsWith(label));
  return entry?.split(":")[1].trim();
}
