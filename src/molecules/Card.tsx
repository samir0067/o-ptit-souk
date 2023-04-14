import React, { FC } from "react"
import { Card as MuiCard, CardActions, CardContent, Typography } from "@mui/material"
import Button, { ButtonProps } from "../atoms/Button"
import { Image } from "../atoms/Image"
import { colors } from "../utils/constants"

type CardProps = {
  title: string
  description: string
  btnLabel: string
  btnOnClick: () => void
  img?: string
  backgroundColor?: string
  widthImg?: string
  btnProps?: ButtonProps
}

const Card: FC<CardProps> = ({
  btnProps,
  title,
  description,
  img,
  btnLabel,
  btnOnClick,
  widthImg = "150px",
  backgroundColor = colors.lightCoral,
}: CardProps) => {
  const cardStyles = {
    maxWidth: "500px",
    borderRadius: "25px",
    padding: "15px",
    marginX: "25px",
    backgroundColor: backgroundColor,
  }

  return (
    <MuiCard sx={cardStyles} elevation={10}>
      {img && <Image width={widthImg} image={img} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" color={colors.black} textAlign="center" marginTop="20px">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button {...btnProps} label={btnLabel} onClick={btnOnClick} />
      </CardActions>
    </MuiCard>
  )
}

export default Card
