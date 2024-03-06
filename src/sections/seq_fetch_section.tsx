import Card from "../components/card";
import MiniCard from "../components/mini_card";
import MiniCardWrapper from "../components/mini_card_wrapper";
import Powerful from "../components/powerful";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import useFileLines from "../hooks/useFileLines";

export default function SeqFetchSection() {
  let seq_hits = useFileLines("seq_hits.txt");
  let seq_misses = useFileLines("seq_misses.txt");

  return (
    <div>
      <SectionHeader>Sequence Fetch</SectionHeader>
      <SectionParagraph>
        <Powerful>{seq_hits.length}</Powerful> ortholog sequences were found:
      </SectionParagraph>
      <MiniCardWrapper limit={10}>
        {seq_hits.map((line) =>
          line ? <MiniCard key={line}>{line}</MiniCard> : <></>
        )}
      </MiniCardWrapper>
      <Card type="warning">
        <SectionParagraph>
          <Powerful type="warning">{seq_misses.length}</Powerful> ortholog
          sequences were not found:
        </SectionParagraph>
        <MiniCardWrapper limit={10}>
          {seq_misses.map((line, index) =>
            line ? <MiniCard key={index}>{line}</MiniCard> : <></>
          )}
        </MiniCardWrapper>
      </Card>
    </div>
  );
}
