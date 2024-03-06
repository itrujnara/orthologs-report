import Card from "../components/card";
import MiniCard from "../components/mini_card";
import MiniCardWrapper from "../components/mini_card_wrapper";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import useFileLines from "../hooks/useFileLines";

export default function SeqFetchSection() {
  let seq_hits = useFileLines("seq_hits.txt");
  let seq_misses = useFileLines("seq_misses.txt");

  return (
    <Section>
      <SectionHeader>Sequence Fetch</SectionHeader>
      {seq_hits.length > 0 ? (
        <>
          <SectionParagraph>
            <Powerful>{seq_hits.length}</Powerful> ortholog sequences were
            found:
          </SectionParagraph>
          <MiniCardWrapper limit={10}>
            {seq_hits.map((line) =>
              line ? <MiniCard key={line}>{line}</MiniCard> : <></>
            )}
          </MiniCardWrapper>
          {seq_misses.length > 0 ? (
            <Card type="warning">
              <SectionParagraph>
                <Powerful type="warning">{seq_misses.length}</Powerful> ortholog
                sequences were not found:
              </SectionParagraph>
              <MiniCardWrapper limit={10}>
                {seq_misses.map((line, index) =>
                  line ? (
                    <MiniCard type="warning" key={index}>
                      {line}
                    </MiniCard>
                  ) : (
                    <></>
                  )
                )}
              </MiniCardWrapper>
            </Card>
          ) : (
            <></>
          )}
        </>
      ) : (
        <Card type="error">No sequences were found.</Card>
      )}
    </Section>
  );
}
