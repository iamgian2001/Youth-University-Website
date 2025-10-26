interface ProgramCardProps {
  name: string;
  image: string;
}

function ProgramCard({ name, image }: ProgramCardProps) {
  return (
    <div
      className={`bg-cover bg-center bg-slate-950/30 bg-blend-multiply w-full md:max-3xl:w-3/5 min-3xl:w-7xl 
        min-3xl:h-96 h-36 md:h-44 lg:h-52 flex items-end pb-4 rounded-sm`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="bg-secondary text-text-default body py-1 w-full px-2">
        {name}
      </p>
    </div>
  );
}

export default ProgramCard;
