import { createContext, useContext } from "react"
import { PaletteMode } from "@mui/material"

export interface IColorMode {
  toggleColorMode: () => void
  mode: PaletteMode
}

export const ColorContext = createContext<IColorMode>({
  toggleColorMode: () => {
    // content
  },
  mode: "light",
})

export const useColorMode = () => useContext(ColorContext)
