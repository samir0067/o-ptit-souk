import React, { FC } from "react"
import { Box } from "@mui/material"
import HeaderSection from "../organisms/home/HeaderSection"
import InfoSection from "../organisms/home/InfoSection"
import CarouselSection from "../organisms/home/CarouselSection"
import CatererSection from "../organisms/home/CatererSection"
import Footer from "../molecules/Footer"

const Home: FC = () => {
  return (
    <Box component="div">
      <HeaderSection />
      <InfoSection />
      <CatererSection />
      <CarouselSection />
      <Footer />
    </Box>
  )
}

export default Home
