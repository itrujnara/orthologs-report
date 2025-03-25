import MiniCard from "@/components/mini_card"
import MiniCardWrapper from "@/components/mini_card_wrapper"
import Powerful from "@/components/powerful"
import Section from "@/components/section"
import SectionContent from "@/components/section_content"
import SectionHeader from "@/components/section_header"
import SectionParagraph from "@/components/section_paragraph"
import useCsv, { MergeTableRow } from "@/hooks/useCsv"
import useFileLines from "@/hooks/useFileLines"

export default function MergeSection() {
  const merge_stats = useCsv<MergeTableRow>("merge_stats.csv")
  const stat_row = merge_stats[0]
  const clusters = useFileLines("clusters.csv")
  const unique = clusters.filter((line) => line.split("\t").length === 1)
  const many = clusters.filter((line) => line.split("\t").length > 1)

  return (
    <Section>
      <SectionHeader>ID Merging</SectionHeader>
      <SectionContent>
        <SectionParagraph>
          Sequence-based merging was performed.
        </SectionParagraph>
        <SectionParagraph>
          <Powerful>{stat_row.one}</Powerful> identifiers were unique:
        </SectionParagraph>
        {unique.length > 0 && (
          <MiniCardWrapper limit={10}>
            {unique.map((line) =>
              line ? <MiniCard key={line}>{line}</MiniCard> : <></>
            )}
          </MiniCardWrapper>
        )}
        <SectionParagraph>
          <Powerful>{stat_row.in_clusters}</Powerful> identifiers were found in{" "}
          <Powerful>{stat_row.many}</Powerful> clusters:
        </SectionParagraph>
        {many.length > 0 && (
          <MiniCardWrapper className="flex flex-col" limit={5}>
            {many.map((line) =>
              line ? (
                <MiniCardWrapper limit={5} key={line}>
                  {line.split("\t").map((id) => (
                    <MiniCard key={id}>{id}</MiniCard>
                  ))}
                </MiniCardWrapper>
              ) : (
                <></>
              )
            )}
          </MiniCardWrapper>
        )}
      </SectionContent>
    </Section>
  )
}
