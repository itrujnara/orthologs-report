import useFileLines from "../hooks/useFileLines";
import MiniCard from "./mini_card";
import MiniCardWrapper from "./mini_card_wrapper";
import Powerful from "./powerful";
import SectionParagraph from "./section_paragraph";
import SubsectionHeader from "./subsection_header";

export default function DatabaseBlock({
  dbname,
  path,
}: {
  dbname: string;
  path: string;
}) {
  const lines = useFileLines(path);

  return (
    <>
      <SubsectionHeader>{dbname}</SubsectionHeader>
      <SectionParagraph>
        <Powerful>{lines.length}</Powerful> orthologs were found in the {dbname}{" "}
        database:
      </SectionParagraph>
      <MiniCardWrapper limit={10}>
        {lines.map((line) =>
          line ? <MiniCard key={line}>{line}</MiniCard> : <></>
        )}
      </MiniCardWrapper>
    </>
  );
}
