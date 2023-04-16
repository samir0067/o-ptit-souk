import React, { FC } from "react"
import { Card as MuiCard, CardContent, Grid, Typography } from "@mui/material"
import Button from "../atoms/Button"
import { Image } from "../atoms/Image"
import { colors } from "../utils/constants"
import styles from "./card.module.css"

type CardProps = {
  title: string
  btnLabel: string
  btnOnClick: () => void
  img?: string
  backgroundColor?: string
  widthImg?: string
  titleColor?: string
  btnBackgroundColor?: string
  btnColor?: string
  gridMargin?: string
  gridClassName?: string
}

const Card: FC<CardProps> = ({
  title,
  img,
  btnLabel,
  btnOnClick,
  widthImg = "100%",
  titleColor,
  backgroundColor = colors.lightCoral,
  btnBackgroundColor,
  btnColor,
  gridMargin = "24px",
  gridClassName,
}: CardProps) => {
  return (
    <Grid item xs={12} md={4} marginY={gridMargin} className={gridClassName}>
      <MuiCard elevation={10} className={styles.card} sx={{ backgroundColor: backgroundColor }}>
        {img && <Image width={widthImg} image={img} className={styles.img} />}
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" component="h3" color={titleColor} className={styles.cardTitle}>
            {title}
          </Typography>
          <Button label={btnLabel} onClick={btnOnClick} backgroundColor={btnBackgroundColor} color={btnColor} />
        </CardContent>
      </MuiCard>
    </Grid>
  )
}

export default Card
