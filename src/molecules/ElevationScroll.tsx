import React, { cloneElement } from "react"
import { useScrollTrigger } from "@mui/material"
import { colors } from "../utils/constants"

interface IElevationScroll {
  child: React.ReactElement
}

export const ElevationScroll = ({ child }: IElevationScroll) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(child, {
    sx: trigger ? { backgroundColor: colors.darkCoral } : { backgroundColor: colors.transparent },
    elevation: trigger ? 10 : 0,
  })
}
