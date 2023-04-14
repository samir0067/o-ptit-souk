import React, { FC } from "react"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material"
import useBreakpoints from "services/hooks/useBreakpoints"

export interface IImage {
  image: string
  width?: number | string
  sx?: SxProps<Theme>
}

export const Image: FC<IImage> = ({ width, image, sx }) => {
  const { downSm } = useBreakpoints()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={downSm ? "center" : "flex-start"}
      justifyContent="center"
      sx={sx}
    >
      <img width={width} height="auto" src={image} alt="Logo" />
    </Box>
  )
}
