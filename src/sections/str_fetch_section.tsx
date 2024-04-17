import Card from "../components/card";
import MiniCard from "../components/mini_card";
import MiniCardWrapper from "../components/mini_card_wrapper";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import useFileLines from "../hooks/useFileLines";

export default function StrFetchSection() {
  let str_hits = useFileLines("str_hits.txt");
  let str_misses = useFileLines("str_misses.txt");

  return (
    <Section>
      <SectionHeader>Structure Fetch</SectionHeader>
      {str_hits.length > 0 ? (
        <>
          <SectionParagraph>
            <Powerful>{str_hits.length}</Powerful> ortholog structures were
            found:
          </SectionParagraph>
          <MiniCardWrapper limit={10}>
            {str_hits.map((line) =>
              line ? <MiniCard key={line}>{line}</MiniCard> : <></>
            )}
          </MiniCardWrapper>
          {str_misses.length > 0 ? (
            <Card type="warning">
              <SectionParagraph>
                {str_misses.length === 1 ? (
                  <>
                    <Powerful type="warning">1</Powerful> ortholog structure was
                    not found:
                  </>
                ) : (
                  <>
                    <Powerful type="warning">{str_misses.length}</Powerful>{" "}
                    ortholog structures were not found:
                  </>
                )}
              </SectionParagraph>
              <MiniCardWrapper limit={10}>
                {str_misses.map((line, index) =>
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
        <Card type="error">No structures were found.</Card>
      )}
    </Section>
  );
}
