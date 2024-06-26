import Alignment from "../components/alignment";
import Powerful from "../components/powerful";
import Section from "../components/section";
import SectionContent from "../components/section_content";
import SectionHeader from "../components/section_header";
import SectionParagraph from "../components/section_paragraph";
import useFasta from "../hooks/useFasta";
import useYamlEntry from "../hooks/useYamlEntry";

export default function AlignmentSection() {
  const alignment = useFasta("alignment.fa");
  const use_structures = useYamlEntry("params.yml", "use_structures");

  return (
    <Section>
      <SectionHeader>Multiple Sequence Alignment</SectionHeader>
      <SectionContent>
        <SectionParagraph>
          The sequences were aligned using the{" "}
          {use_structures === "true" ? (
            <Powerful>3D-COFFEE</Powerful>
          ) : (
            <Powerful>T-COFFEE Basic</Powerful>
          )}{" "}
          algorithm.
        </SectionParagraph>
        <Alignment records={alignment} />
      </SectionContent>
    </Section>
  );
}
