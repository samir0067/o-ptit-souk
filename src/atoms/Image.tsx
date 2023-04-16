import React, { FC } from "react"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material"
import useBreakpoints from "services/hooks/useBreakpoints"

export type ImageProps = {
  image: string
  width?: number | string
  className?: string
  sxContainer?: SxProps<Theme>
}

export const Image: FC<ImageProps> = ({ width, image, sxContainer, className }: ImageProps) => {
  const { downSm } = useBreakpoints()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={downSm ? "center" : "flex-start"}
      justifyContent="center"
      sx={sxContainer}
    >
      <img width={width} height="auto" src={image} alt="Logo" className={className} />
    </Box>
  )
}
