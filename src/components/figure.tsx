import SubsectionHeader from "./subsection_header";

export default function Figure({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <>
      <SubsectionHeader>{title}</SubsectionHeader>
      <img className="w-full max-w-[500px] mx-auto" src={path} alt="Figure" />
    </>
  );
}
