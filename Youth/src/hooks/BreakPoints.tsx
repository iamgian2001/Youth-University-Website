import { useMediaQuery } from "react-responsive";

export function useBreakpoints() {
  const isSm = useMediaQuery({ maxWidth: 640 });
  const isMd = useMediaQuery({ maxWidth: 768 });
  const isLg = useMediaQuery({ maxWidth: 1024 });
  const isXl = useMediaQuery({ maxWidth: 1280 });
  const is2xl = useMediaQuery({ maxWidth: 1536 });

  return { isSm, isMd, isLg, isXl, is2xl };
}
