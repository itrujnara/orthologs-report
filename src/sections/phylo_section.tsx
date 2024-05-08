import Figure from "../components/figure";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import useYamlEntry from "../hooks/useYamlEntry";

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
  let methods: string[] = [];
  const skip_iqtree = useYamlEntry("params.yml", "skip_iqtree");
  const skip_fastme = useYamlEntry("params.yml", "skip_fastme");

  if (skip_iqtree === "false") {
    methods.push("IQ-TREE");
  }
  if (skip_fastme === "false") {
    methods.push("FastME");
  }

  return (
    <Section>
      <SectionHeader>Phylogenetic Reconstruction</SectionHeader>
      <SectionContent>
        <SectionParagraph>
          {methods ? (
            <>
              Phylogenetic reconstruction was performed using{" "}
              <Enumeration strings={methods} />.
            </>
          ) : (
            <>No trees were generated.</>
          )}
        </SectionParagraph>
        {skip_iqtree === "false" ? (
          <div className="overflow-x-scroll">
            <Figure title="IQ-TREE" path="iqtree.png" />
          </div>
        ) : (
          <></>
        )}
        {skip_fastme === "false" ? (
          <div className="overflow-x-scroll">
            <Figure title="FastME" path="fastme.png" />
          </div>
        ) : (
          <></>
        )}
      </SectionContent>
    </Section>
  );
}
