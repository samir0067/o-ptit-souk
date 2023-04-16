import React, { FC } from "react"
import { Box, Grid } from "@mui/material"
import { Carousel } from "molecules/Carousel"
import styles from "./carouselSection.module.css"

const CarouselSection: FC = () => {
  return (
    <Box component="div">
      <Grid container columnSpacing={{ xs: 1, md: 3 }} sx={{ zIndex: 2 }}>
        <Grid item xs={12} className={styles.gridCarousel}>
          <Carousel />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CarouselSection
