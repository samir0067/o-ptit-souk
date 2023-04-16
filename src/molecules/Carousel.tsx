import React, { FC } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider, { Settings } from "react-slick"
import { Box } from "@mui/material"
import { Title } from "../atoms/Title"
import { dataBuffets } from "../utils/constants/dataBuffets"
import styles from "./carousel.module.css"

export const Carousel: FC = () => {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  }

  return (
    <Box height="auto" width="100%">
      <Slider {...settings}>
        {dataBuffets.map((buffets, index: number) => (
          <Box key={index} className={styles.container}>
            <Title title={buffets.title} variant="h3" component="h2" className={styles.titleStyles} />
            <Box component="img" src={buffets.index} alt={buffets.name} className={styles.imgStyles} />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
