import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

/**
 * Hook to manage screen size with Breakpoint
 */
const useBreakpoints = () => {
  const theme = useTheme()

  const downSm = useMediaQuery(theme.breakpoints.down("sm"))

  const downMd = useMediaQuery(theme.breakpoints.down("md"))

  const downLg = useMediaQuery(theme.breakpoints.down("lg"))

  return { downSm, downMd, downLg }
}

export default useBreakpoints

// TEMPORARY
//``xs, extra-petit : 0px``
// ``sm, petit : 600px``
// ``md, moyen : 900px``
// ``lg, grand : 1 200 pixels``
// ``xl, extra-large : 1536px``
