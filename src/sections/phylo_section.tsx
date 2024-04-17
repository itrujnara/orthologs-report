import Figure from "../components/figure";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";

const methods = ["IQtree", "FastME"];

function Enumeration({ strings }: { strings: string[] }) {
  return (
    <span>
      {strings.map((string, index) => (
        <>
          {index > 0 && index < strings.length - 1 ? ", " : ""}
          <Powerful key={index}>{string}</Powerful>
          {index === strings.length - 2 ? " and " : ""}
        </>
      ))}
    </span>
  );
}

export default function PhyloSection() {
  return (
    <Section>
      <SectionHeader>Phylogenetic Reconstruction</SectionHeader>
      <SectionContent>
        <SectionParagraph>
          Phylogenetic reconstruction was performed using{" "}
          <Enumeration strings={methods} />.
        </SectionParagraph>
        <div className="overflow-x-scroll">
          <Figure title="Phylogenetic Tree" path="iqtree.png" />
        </div>
      </SectionContent>
    </Section>
  );
}
