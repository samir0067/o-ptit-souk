import { TextField as MuiTextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import { colorsBis } from "utils/constants/constants"

/**
 * Style components for form fields
 */
export const TextField = styled(MuiTextField)(() => ({
  width: "100%",
  margin: "10px 0",
  zIndex: 0,
  "& .MuiOutlinedInput-root": {
    backgroundColor: colorsBis.white,
    borderRadius: "9px",
    "&:hover fieldset": {
      borderColor: colorsBis.lightNavy,
    },
    "&.Mui-focused fieldset": {
      borderColor: colorsBis.darkNavy,
    },
  },
  label: {
    color: colorsBis.black,
  },
  "& label.Mui-focused": {
    color: colorsBis.darkNavy,
  },
  "& .MuiInput-underline:after": {
    borderColor: colorsBis.darkNavy,
  },
}))
