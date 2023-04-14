import { TextField as MuiTextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import { colors } from "utils/constants"

/**
 * Style components for form fields
 */
export const TextField = styled(MuiTextField)(() => ({
  width: "100%",
  margin: "10px 0",
  zIndex: 0,
  "& .MuiOutlinedInput-root": {
    backgroundColor: colors.white,
    borderRadius: "9px",
    "&:hover fieldset": {
      borderColor: colors.lightBlue,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.darkBlue,
    },
  },
  label: {
    color: colors.black,
  },
  "& label.Mui-focused": {
    color: colors.darkBlue,
  },
  "& .MuiInput-underline:after": {
    borderColor: colors.darkBlue,
  },
}))
