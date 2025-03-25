import TooltippedText from "@/components/tooltipped_text"
import Card from "../components/card"
import MiniCard from "../components/mini_card"
import MiniCardWrapper from "../components/mini_card_wrapper"
import Powerful from "../components/powerful"
import Section from "../components/section"
import SectionContent from "../components/section_content"
import SectionHeader from "../components/section_header"
import SectionParagraph from "../components/section_paragraph"
import SubsectionHeader from "../components/subsection_header"
import useCsv, { ScoreTableRow } from "../hooks/useCsv"
import useFileLines from "../hooks/useFileLines"
import useYamlEntry from "../hooks/useYamlEntry"

function countDistinctScores(scores: ScoreTableRow[]): Map<number, number> {
  const scoreCounts = new Map<number, number>()

  for (const obj of scores) {
    if (!obj.score) {
      continue
    }
    if (scoreCounts.has(obj.score)) {
      scoreCounts.set(obj.score, scoreCounts.get(obj.score)! + 1)
    } else {
      scoreCounts.set(obj.score, 1)
    }
  }

  // sort by score
  return new Map(Array.from(scoreCounts.entries()).sort(([a], [b]) => a - b))
}

function Goodness() {
  return (
    <TooltippedText tooltipText="Goodness is the ratio of mean score to max score. It approximates the percentage of theoretical support that has been found.">
      goodness
    </TooltippedText>
  )
}

function ConsensusPercentage() {
  return (
    <TooltippedText tooltipText="The percentage of orthologs that are supported by all the sources.">
      consensus percentage
    </TooltippedText>
  )
}

function PrivatePercentage() {
  return (
    <TooltippedText tooltipText="The percentage of orthologs that are supported by only one source.">
      percentage of privates
    </TooltippedText>
  )
}

export default function AssemblySection() {
  const scores = useCsv<ScoreTableRow>("score_table.csv")
  const scoreCounts = countDistinctScores(scores)
  const filtered = useFileLines("filtered_hits.txt")
  const use_centroid = useYamlEntry("params.yml", "use_centroid")
  const min_score = useYamlEntry("params.yml", "min_score")
  const mean_score = useYamlEntry("orthostats.yml", "mean")
  const mode_score = useYamlEntry("orthostats.yml", "mode")
  const goodness = useYamlEntry("orthostats.yml", "goodness")
  const percent_max = useYamlEntry("orthostats.yml", "percent_max")
  const percent_privates = useYamlEntry("orthostats.yml", "percent_privates")

  return (
    <Section>
      <SectionHeader>Assembly</SectionHeader>
      <SectionContent>
        <SubsectionHeader>Scores</SubsectionHeader>
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
        <SubsectionHeader>Stats</SubsectionHeader>
        <SectionParagraph>
          The mean score is <Powerful>{mean_score}</Powerful>. The mode score is{" "}
          <Powerful>{mode_score}</Powerful>. The <Goodness /> is{" "}
          <Powerful>{goodness}</Powerful>. The <ConsensusPercentage /> is{" "}
          <Powerful>{parseFloat(percent_max!) * 100}</Powerful>%. The{" "}
          <PrivatePercentage /> is{" "}
          <Powerful>
            {(parseFloat(percent_privates!) * 100).toFixed(2)}
          </Powerful>
          %.
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
              <Powerful>{filtered.length}</Powerful> orthologs (including the{" "}
              <Powerful>query</Powerful>) were selected:
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
  )
}
