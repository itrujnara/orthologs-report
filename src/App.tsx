import "./App.css";
import TitleSection from "./sections/title_section";
import QuerySection from "./sections/query_section";
import DatabaseSection from "./sections/database_section";
import AssemblySection from "./sections/assembly_section";
import SeqFetchSection from "./sections/seq_fetch_section";
import AlignmentSection from "./sections/alignment_section";
import PhyloSection from "./sections/phylo_section";
import useYamlEntry from "./hooks/useYamlEntry";
import StrFetchSection from "./sections/str_fetch_section";

function App() {
  const use_structures = useYamlEntry("params.yml", "use_structures");
  const skip_downstream = useYamlEntry("params.yml", "skip_downstream");

  return (
    <div className="bg-primary text-primary-foreground font-body w-full min-h-screen">
      <div className="mx-auto min-w-[300px] w-[50%] max-w-[1000px]">
        <TitleSection />
        <QuerySection />
        <DatabaseSection />
        <AssemblySection />
        {skip_downstream !== "true" ? <SeqFetchSection /> : <></>}
        {use_structures === "true" && skip_downstream !== "true" ? (
          <StrFetchSection />
        ) : (
          <></>
        )}
        {skip_downstream !== "true" ? <AlignmentSection /> : <></>}
        {skip_downstream !== "true" ? <PhyloSection /> : <></>}
      </div>
    </div>
  );
}

export default App;
