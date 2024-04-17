import Card from "../components/card";
import MiniCard from "../components/mini_card";
import MiniCardWrapper from "../components/mini_card_wrapper";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import SubsectionHeader from "../components/subsection_header";
import useCsv, { ScoreTableRow } from "../hooks/useCsv";
import useFileLines from "../hooks/useFileLines";
import useYamlEntry from "../hooks/useYamlEntry";

const countDistinctScores = (scores: ScoreTableRow[]): Map<number, number> => {
  const scoreCounts = new Map<number, number>();

  for (const obj of scores) {
    if (scoreCounts.has(obj.score)) {
      scoreCounts.set(obj.score, scoreCounts.get(obj.score)! + 1);
    } else {
      scoreCounts.set(obj.score, 1);
    }
  }

  // sort by score
  return new Map(Array.from(scoreCounts.entries()).sort(([a], [b]) => a - b));
};

export default function AssemblySection() {
  const scores = useCsv<ScoreTableRow>("score_table.csv");
  const scoreCounts = countDistinctScores(scores);
  const filtered = useFileLines("filtered_hits.txt");
  const use_centroid = useYamlEntry("params.yml", "use_centroid");
  const min_score = useYamlEntry("params.yml", "min_score");

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
            {Array.from(scoreCounts.entries()).map(([score, count]) => (
              <li key={score}>
                <Powerful>{count}</Powerful> orthologs have a score of{" "}
                <Powerful>{score}</Powerful>.
              </li>
            ))}
          </ul>
        </SectionParagraph>
        <SubsectionHeader>Filtering</SubsectionHeader>
        <SectionParagraph>
          {use_centroid === "true" ? (
            <>
              The <Powerful>centroid</Powerful> merge strategy was used.
            </>
          ) : (
            <>
              Orthologs were filtered by <Powerful>score</Powerful>. The minimum
              score was <Powerful>{min_score}</Powerful>.
            </>
          )}
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
