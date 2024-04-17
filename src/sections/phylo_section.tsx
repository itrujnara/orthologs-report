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
  const use_iqtree = useYamlEntry("params.yml", "use_iqtree");
  const use_fastme = useYamlEntry("params.yml", "use_fastme");

  if (use_iqtree === "true") {
    methods.push("IQ-TREE");
  }
  if (use_fastme === "true") {
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
        {use_iqtree === "true" ? (
          <div className="overflow-x-scroll">
            <Figure title="IQ-TREE" path="iqtree.png" />
          </div>
        ) : (
          <></>
        )}
        {use_fastme === "true" ? (
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
