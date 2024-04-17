import useCsv, { ScoreTableRow } from "../hooks/useCsv";
import Card from "./card";
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
  const data = useCsv<ScoreTableRow>(path);
  const lines = data
    ?.filter((row: ScoreTableRow) => row[dbname] === "1")
    .map((row) => row.id);

  console.log(data);

  return (
    <>
      <SubsectionHeader>{dbname}</SubsectionHeader>
      {lines!.length > 0 ? (
        <>
          <SectionParagraph>
            <Powerful>{lines!.length}</Powerful> orthologs were found in the{" "}
            {dbname} database:
          </SectionParagraph>
          <MiniCardWrapper limit={10}>
            {lines!.map((line) =>
              line ? <MiniCard key={line}>{line}</MiniCard> : <></>
            )}
          </MiniCardWrapper>
        </>
      ) : (
        <Card type="error">
          No orthologs were found in the{" "}
          <Powerful type="error">{dbname}</Powerful> database.
        </Card>
      )}
    </>
  );
}
