import React, { FC } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import DrawerMenu from "./DrawerMenu"
import { Button, Slide } from "@mui/material"
import { useNavigate } from "react-router-dom"
import LOGO_NOIR from "assets/logoBlack.png"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import { IconSocialButton } from "atoms/IconSocialButton"
import { ElevationScroll } from "molecules/ElevationScroll"
import { Image } from "../../atoms/Image"

const NavBar: FC = () => {
  const navigate = useNavigate()

  return (
    <ElevationScroll
      child={
        <AppBar position="fixed" sx={{ width: { md: `calc(100%)` }, ml: { md: `230px` } }}>
          <Toolbar>
            <Box component="div" flexGrow={{ xs: 1, md: 0 }} display="flex" justifyContent="center">
              <Image width="130px" image={LOGO_NOIR} />
            </Box>
            <Box component="div" justifyContent="center" flexGrow={1} display={{ xs: "none", md: "flex" }} />
            <Box component="div" justifyContent="center" display={{ xs: "none", md: "flex" }}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
                <Button
                  sx={{
                    ...buttonSx,
                    ...(location.pathname === "/" && {
                      textDecoration: "underline",
                      fontStyle: "italic",
                    }),
                  }}
                  onClick={() => navigate("/")}
                >
                  {content.home}
                </Button>
              </Slide>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={800}>
                <Button
                  sx={{
                    ...buttonSx,
                    ...(location.pathname === "/prestations" && {
                      textDecoration: "underline",
                      fontStyle: "italic",
                    }),
                  }}
                  onClick={() => navigate("/prestations")}
                >
                  {content.solution}
                </Button>
              </Slide>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={600}>
                <Button
                  sx={{
                    ...buttonSx,
                    ...(location.pathname === "/contact" && {
                      textDecoration: "underline",
                      fontStyle: "italic",
                    }),
                  }}
                  onClick={() => navigate("/carte")}
                >
                  {content.ourCard}
                </Button>
              </Slide>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={400}>
                <Button
                  sx={{
                    ...buttonSx,
                    ...(location.pathname === "/contact" && {
                      textDecoration: "underline",
                      fontStyle: "italic",
                    }),
                  }}
                  onClick={() => navigate("/contact")}
                >
                  {content.contact}
                </Button>
              </Slide>
            </Box>
            <Box component="div" justifyContent="center" display={{ xs: "none", md: "flex" }}>
              <IconSocialButton size="small" iconType={<FacebookIcon />} />
              <IconSocialButton size="small" iconType={<InstagramIcon />} />
            </Box>
            <DrawerMenu />
          </Toolbar>
        </AppBar>
      }
    />
  )
}

const buttonSx = {
  color: "text.primary",
  fontFamily: "Roboto",
  fontWeight: "bold",
}

const content = {
  home: "Accueil",
  solution: "Prestations",
  ourCard: "Notre carte",
  contact: "Contact",
}

export default NavBar
