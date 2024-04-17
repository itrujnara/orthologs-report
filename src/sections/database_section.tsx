import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import DatabaseBlock from "../components/database_block";
import Figure from "../components/figure";
import Section from "../components/section";
import useCsv, { ScoreTableRow } from "../hooks/useCsv";

export default function DatabaseSection() {
  const data = useCsv<ScoreTableRow>("score_table.csv");
  const core_fields = ["id", "id_format", "score"];
  const databases = Object.keys(data![0]).filter(
    (key) => !core_fields.includes(key)
  );

  return (
    <Section>
      <SectionHeader>Database Search</SectionHeader>
      <SectionContent>
        {databases.map((db) => (
          <DatabaseBlock key={db} dbname={db} path="score_table.csv" />
        ))}
        <Figure title="Support Plot" path="supports.png" />
        <Figure title="Venn Diagram" path="venn.png" />
        <Figure title="Jaccard Index" path="jaccard.png" />
      </SectionContent>
    </Section>
  );
}
