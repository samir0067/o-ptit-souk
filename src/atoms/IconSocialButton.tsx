import React, { FC } from "react"
import { Box, IconButton as MuiIconButton } from "@mui/material"
import { colors } from "../utils/constants"
import useBreakpoints from "services/hooks/useBreakpoints"

export interface IIconSocialButton {
  iconType: JSX.Element
  size?: "small" | "medium" | "large"
}

export const IconSocialButton: FC<IIconSocialButton> = ({ size, iconType }) => {
  const { downSm } = useBreakpoints()

  return (
    <Box
      mx="3px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={downSm ? "center" : "flex-start"}
    >
      <MuiIconButton
        size={size}
        sx={{
          color: colors.black,
          border: `1px solid ${colors.black}`,
          "&:hover": {
            backgroundColor: colors.black,
            color: colors.white,
          },
        }}
      >
        {iconType}
      </MuiIconButton>
    </Box>
  )
}
