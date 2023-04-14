import React, { FC } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider, { Settings } from "react-slick"
import { Box } from "@mui/material"
import useBreakpoints from "../services/hooks/useBreakpoints"
import burgerTray from "assets/images/burgerTray.jpg"
import cupCakesTray from "assets/images/cupCakesTray.jpg"
import burgerTray3 from "assets/images/burgerTray3.jpg"
import snacks from "assets/images/snacks.jpg"
import verrines from "assets/images/verrines.jpg"
import burgerTray2 from "assets/images/burgerTray2.jpg"
import toast2 from "assets/images/toast2.jpg"
import salades from "assets/images/salades.jpg"

export const dataBuffet = [
  {
    id: 1,
    name: "burgerTray.jpg",
    index: burgerTray,
  },
  {
    id: 2,
    name: "cupCakesTray",
    index: cupCakesTray,
  },
  {
    id: 3,
    name: "snacks",
    index: snacks,
  },
  {
    id: 4,
    name: "burgerTray2",
    index: burgerTray2,
  },
  {
    id: 5,
    name: "verrines",
    index: verrines,
  },
  {
    id: 6,
    name: "burgerTray3",
    index: burgerTray3,
  },
  {
    id: 7,
    name: "toast2",
    index: toast2,
  },
  {
    id: 8,
    name: "salades",
    index: salades,
  },
]

export const Carousel: FC = () => {
  const { downMd } = useBreakpoints()

  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    vertical: downMd,
  }

  return (
    <Box height="auto" width="100%">
      <Slider {...settings}>
        {dataBuffet.map((slideTrustUs, index: number) => (
          <Box key={index} height="7rem">
            <Box component="img" src={slideTrustUs.index} alt={slideTrustUs.name} m="auto" height="6rem" />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
