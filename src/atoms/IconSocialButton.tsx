import React, { FC } from "react"
import { Box, IconButton as MuiIconButton } from "@mui/material"
import { colorsBis } from "../utils/constants/constants"
import useBreakpoints from "services/hooks/useBreakpoints"

type IconSocialButtonProps = {
  iconType: JSX.Element
  size?: "small" | "medium" | "large"
  background?: string
  color?: string
}

export const IconSocialButton: FC<IconSocialButtonProps> = ({
  size,
  iconType,
  background = colorsBis.black,
  color = colorsBis.white,
}: IconSocialButtonProps) => {
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
          color: background,
          border: `1px solid ${background}`,
          "&:hover": {
            backgroundColor: background,
            color: color,
          },
        }}
      >
        {iconType}
      </MuiIconButton>
    </Box>
  )
}
