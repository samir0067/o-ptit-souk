import React, { FC } from "react"
import { Box } from "@mui/material"
import { useRecoilValue } from "recoil"
import { todoListState } from "../services/store/atoms"
import HeaderSection from "../organisms/home/HeaderSection"
import InfoSection from "../organisms/home/InfoSection"
import CarouselSection from "../organisms/home/CarouselSection"
import CatererSection from "../organisms/home/CatererSection"
import Footer from "../molecules/Footer"

const Home: FC = () => {
  const todoList = useRecoilValue(todoListState)
  console.log("todoList =>", todoList)

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
