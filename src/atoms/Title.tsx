import React, { ElementType, FC } from "react"
import { Slide, SxProps, Theme, Typography } from "@mui/material"
import { VariantTypo } from "utils/types"
import "@fontsource/sintony/700.css"

type TitleProps = {
  title: string
  variant: VariantTypo
  component: ElementType
  sx?: SxProps<Theme>
  slideDirection?: "right" | "left" | "up" | "down"
}

const Title: FC<TitleProps> = ({ component, variant, title, sx, slideDirection }: TitleProps) => {
  return (
    <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit timeout={400}>
      <Typography
        component={component}
        variant={variant}
        fontFamily="Sintony"
        marginY="30px"
        textAlign="center"
        sx={{ ...sx, letterSpacing: "5px" }}
      >
        {title}
      </Typography>
    </Slide>
  )
}

export default Title
