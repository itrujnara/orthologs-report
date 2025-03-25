import "./App.css";
import TitleSection from "./sections/title_section";
import QuerySection from "./sections/query_section";
import DatabaseSection from "./sections/database_section";
import AssemblySection from "./sections/assembly_section";
import SeqFetchSection from "./sections/seq_fetch_section";
import useYamlEntry from "./hooks/useYamlEntry";
import MergeSection from "./sections/merge_section";

function App() {
  const skip_merge = useYamlEntry("params.yml", "skip_merge");

  return (
    <div className="bg-primary text-primary-foreground font-body w-full min-h-screen">
      <div className="mx-auto min-w-[300px] w-[50%] max-w-[1000px]">
        <TitleSection />
        <QuerySection />
        {skip_merge !== "true" ? <SeqFetchSection /> : <></>}
        {skip_merge !== "true" ? <MergeSection /> : <></>}
        <DatabaseSection />
        <AssemblySection />
      </div>
    </div>
  );
}

export default App;
