import React, { ElementType, FC } from "react"
import { Slide, SxProps, Theme, Typography } from "@mui/material"
import { VariantTypo } from "utils/types"

type TitleProps = {
  title: string
  variant: VariantTypo
  component: ElementType
  sx?: SxProps<Theme>
  slideDirection?: "right" | "left" | "up" | "down"
  writerEffect?: JSX.Element
  className?: string
}

export const Title: FC<TitleProps> = ({
  component,
  variant,
  title,
  writerEffect,
  sx,
  slideDirection,
  className,
}: TitleProps) => {
  return (
    <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit timeout={400}>
      <Typography
        component={component}
        variant={variant}
        className={className}
        sx={{
          ...sx,
          letterSpacing: "5px",
          fontFamily: "dekko, cursive",
          marginY: "75px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
        <span
          style={{
            textShadow:
              "1px 0 #914281, -1px 0 #914281, 0 1px #914281, 0 -1px #914281, 1px 1px #914281, -1px -1px #914281 , 1px -1px #914281, -1px 1px #914281",
          }}
        >
          {writerEffect}
        </span>
      </Typography>
    </Slide>
  )
}
