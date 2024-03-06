import Card from "../components/card";
import MiniCard from "../components/mini_card";
import MiniCardWrapper from "../components/mini_card_wrapper";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import SubsectionHeader from "../components/subsection_header";
import useCsv from "../hooks/useCsv";
import useFileLines from "../hooks/useFileLines";
import useYamlEntry from "../hooks/useYamlEntry";

type ScoreTable = {
  id: string;
  oma: number;
  panther: number;
  inspector: number;
  score: number;
};

export default function AssemblySection() {
  const scores = useCsv<ScoreTable>("score_table.csv");
  const filtered = useFileLines("filtered_hits.txt");
  const strategy = useYamlEntry("params.yml", "merge_strategy");

  return (
    <Section>
      <SectionHeader>Assembly</SectionHeader>
      <SubsectionHeader>Scores</SubsectionHeader>
      <SectionContent>
        <SectionParagraph>
          <Powerful>{scores.length}</Powerful> orthologs were found.
        </SectionParagraph>
        <SectionParagraph>The scores are as follows:</SectionParagraph>
        <SectionParagraph>
          <ul className="list-disc">
            <li>
              <Powerful>{scores.filter((it) => it.score == 3).length}</Powerful>{" "}
              orthologs have a score of 3.
            </li>
            <li>
              <Powerful>{scores.filter((it) => it.score == 2).length}</Powerful>{" "}
              orthologs have a score of 2.
            </li>
            <li>
              <Powerful>{scores.filter((it) => it.score == 1).length}</Powerful>{" "}
              orthologs have a score of 1.
            </li>
          </ul>
        </SectionParagraph>
        <SubsectionHeader>Filtering</SubsectionHeader>
        <SectionParagraph>
          The <Powerful>{strategy}</Powerful> search strategy was selected.
        </SectionParagraph>
        <SectionParagraph>
          {filtered.length > 0 ? (
            <>
              <Powerful>{filtered.length}</Powerful> orthologs were selected:
              <MiniCardWrapper limit={10}>
                {filtered.map((line, index) =>
                  line ? <MiniCard key={index}>{line}</MiniCard> : <></>
                )}
              </MiniCardWrapper>
            </>
          ) : (
            <Card type="error">No orthologs were selected.</Card>
          )}
        </SectionParagraph>
      </SectionContent>
    </Section>
  );
}
