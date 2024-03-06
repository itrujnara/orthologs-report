import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import DatabaseBlock from "../components/database_block";
import Figure from "../components/figure";
import Section from "../components/section";

export default function DatabaseSection() {
  return (
    <Section>
      <SectionHeader>Database Search</SectionHeader>
      <SectionContent>
        <DatabaseBlock dbname="OMA" path="oma_group.txt" />
        <DatabaseBlock dbname="PANTHER" path="panther_group.txt" />
        <DatabaseBlock dbname="OrthoInspector" path="inspector_group.txt" />
        <Figure title="Support Plot" path="supports.png" />
        <Figure title="Venn Diagram" path="venn.png" />
        <Figure title="Jaccard Index" path="jaccard.png" />
      </SectionContent>
    </Section>
  );
}
