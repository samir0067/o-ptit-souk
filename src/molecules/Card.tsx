import React, { FC } from "react"
import { Card as MuiCard, CardActions, CardContent, Typography } from "@mui/material"
import Button, { ButtonProps } from "../atoms/Button"
import { Image } from "../atoms/Image"

type CardProps = {
  title: string
  description: string
  btnLabel: string
  btnOnClick: () => void
  img?: string
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
}: CardProps) => {
  return (
    <MuiCard sx={{ maxWidth: "600px", borderRadius: "25px", padding: "15px", marginX: "25px" }} elevation={10}>
      {img && <Image width={widthImg} image={img} />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button {...btnProps} label={btnLabel} onClick={btnOnClick} />
      </CardActions>
    </MuiCard>
  )
}

export default Card
