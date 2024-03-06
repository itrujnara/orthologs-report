import SectionHeader from "../components/section_header";
import SectionContent from "../components/section_content";
import SectionParagraph from "../components/section_paragraph";
import Powerful from "../components/powerful";
import useFileLines from "../hooks/useFileLines";
import useCsv from "../hooks/useCsv";
import useYamlEntry from "../hooks/useYamlEntry";
import Section from "../components/section";

type Samplesheet = {
  id: string;
  query: string;
};

export default function QuerySection() {
  let id = useFileLines("id.txt");
  let taxid = useFileLines("taxid.txt");
  let samplesheet = useCsv<Samplesheet>("samplesheet.csv");
  let uniprot_query = useYamlEntry("params.yml", "uniprot_query");
  let exact_match = useYamlEntry("params.yml", "exact_match");

  return (
    <Section>
      <SectionHeader>Query</SectionHeader>
      <SectionContent>
        {uniprot_query === "true" ? (
          <SectionParagraph>
            You queried the protein <Powerful>{samplesheet[0].id}</Powerful>{" "}
            with Uniprot ID <Powerful>{samplesheet[0].query}</Powerful>.
          </SectionParagraph>
        ) : (
          <SectionParagraph>
            You queried the protein <Powerful>{samplesheet[0].id}</Powerful>{" "}
            from a FASTA file.
          </SectionParagraph>
        )}
        {uniprot_query === "false" && exact_match === "true" ? (
          <SectionParagraph>
            It was found in the database with ID <Powerful>{id[0]}</Powerful>.
            It comes from the NCBI taxon <Powerful>{taxid[0]}</Powerful>.
          </SectionParagraph>
        ) : (
          <SectionParagraph>
            It is not in the database. The closest known protein is{" "}
            <Powerful>{id[0]}</Powerful>. It comes from the NCBI taxon{" "}
            <Powerful>{taxid[0]}</Powerful>.
          </SectionParagraph>
        )}
        {uniprot_query === "true" ? (
          <SectionParagraph>
            It seems to come from the NCBI taxon <Powerful>{taxid[0]}</Powerful>
            .
          </SectionParagraph>
        ) : (
          <></>
        )}
      </SectionContent>
    </Section>
  );
}
