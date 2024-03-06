import "./App.css";
import TitleSection from "./sections/title_section";
import QuerySection from "./sections/query_section";
import DatabaseSection from "./sections/database_section";
import AssemblySection from "./sections/assembly_section";
import SeqFetchSection from "./sections/seq_fetch_section";
import AlignmentSection from "./sections/alignment_section";

function App() {
  return (
    <div className="bg-primary text-primary-foreground font-sans w-full min-h-screen">
      <div className="mx-auto min-w-[300px] w-[50%] max-w-[1000px]">
        <TitleSection />
        <QuerySection />
        <DatabaseSection />
        <AssemblySection />
        <SeqFetchSection />
        <AlignmentSection />
      </div>
    </div>
  );
}

export default App;
