import React, { FC } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box, Grid } from "@mui/material"
import styles from "./carouselSection.module.css"
import Slider, { Settings } from "react-slick"
import { dataBuffets } from "../../utils/constants/dataBuffets"
import { Title } from "../../atoms/Title"

const CarouselSection: FC = () => {
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
    <Box component="div" className={styles.containerBox}>
      <Grid container columnSpacing={{ xs: 1, md: 3 }} sx={{ zIndex: 2 }}>
        <Grid item xs={12} className={styles.gridCarousel}>
          <Box height="auto" width="100%">
            <Slider {...settings}>
              {dataBuffets.map((buffets, index: number) => (
                <Box key={index} className={styles.containerCarousel}>
                  <Title title={buffets.title} variant="h5" component="p" className={styles.titleStyles} />
                  <Box component="img" src={buffets.index} alt={buffets.name} className={styles.imgStyles} />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarouselSection
