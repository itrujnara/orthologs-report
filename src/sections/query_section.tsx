import SectionHeader from "../components/section_header";
import SectionContent from "../components/section_content";
import SectionParagraph from "../components/section_paragraph";
import Powerful from "../components/powerful";
import useFileLines from "../hooks/useFileLines";
import useCsv from "../hooks/useCsv";

type Samplesheet = {
  id: string;
  query: string;
};

export default function QuerySection() {
  // let id = useFileLines("id.txt");
  let taxid = useFileLines("BicD2_aligned.fa");
  let samplesheet = useCsv<Samplesheet>("samplesheet.csv");

  return (
    <div>
      <SectionHeader>Query</SectionHeader>
      <SectionContent>
        <SectionParagraph>
          You queried the protein <Powerful>{samplesheet[0].id}</Powerful> with
          Uniprot ID <Powerful>{samplesheet[0].query}</Powerful>.
        </SectionParagraph>
        <SectionParagraph>
          It seems to come from the NCBI taxon <Powerful>{taxid[0]}</Powerful>.
        </SectionParagraph>
      </SectionContent>
    </div>
  );
}
