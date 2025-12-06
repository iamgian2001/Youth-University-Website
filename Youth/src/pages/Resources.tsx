import { ScrollText, SquareLibrary } from "lucide-react";
import { useBreakpoints } from "../hooks/BreakPoints";
import { Link } from "react-router";

export default function Resources() {
  const { isLg, isMd, isSm, isXl } = useBreakpoints();
  const iconSize = isSm ? 32 : isMd ? 40 : isLg ? 48 : isXl ? 56 : 64;
  const getCardSize = () => {
    if (isSm) return "w-45 h-45";
    if (isMd) return "w-50 h-50";
    if (isLg) return "w-55 h-55";
    if (isXl) return "w-60 h-60";
    return "w-70 h-70";
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap gap-10 text-lg xl:text-xl font-semibold font-cta w-full justify-center items-center ">
        <Link to="/library">
          <div
            className={`flex flex-col rounded-xl bg-secondary ${getCardSize()} hover:bg-amber-200 text-primary  items-center justify-center p-5 gap-5`}
          >
            <h3>Library</h3>
            <SquareLibrary size={iconSize} />
          </div>
        </Link>
        <Link to="/papers-repository">
          <div
            className={`flex flex-col rounded-xl bg-secondary ${getCardSize()} hover:bg-amber-200 text-primary items-center justify-center p-5 gap-5`}
          >
            <h3>Past Papers</h3>
            <ScrollText size={iconSize} />
          </div>
        </Link>
      </div>
    </div>
  );
}
