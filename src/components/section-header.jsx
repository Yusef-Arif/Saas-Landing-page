import Badge from "./badge";

const SectionHeader = ({ badge, h, p }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Badge>{badge}</Badge>
      <h2 className="gradient-text text-6xl font-bold max-w-2xl text-center">{h}</h2>
      {p && <p className="max-w-lg text-center text-secondary text-lg">{p}</p>}
    </div>
  );
};

export default SectionHeader;
