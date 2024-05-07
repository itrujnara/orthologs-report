export default function TitleSection() {
  return (
    <div className="mx-auto py-4 font-title border-b-2">
      <div className="flex flex-row items-center justify-center font-semibold">
        <img
          src="nf-core-logo-square.png"
          alt="nf-core logo"
          className="h-20"
        />
        <h1 className="w-min text-4xl">
          <span className="text-nextflow-green">nf-core</span>/reportho
        </h1>
      </div>
      <div className="text-center py-2 text-2xl">Analysis report</div>
      <div className="text-center py-2 text-xl">
        Version 1.0.0 – Marvelous Mainsail
      </div>
    </div>
  );
}
