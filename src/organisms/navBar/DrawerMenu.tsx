import React, { FC, Fragment, useState } from "react"
import { Box, Divider, IconButton, List, ListItem, SwipeableDrawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { ListItemLink } from "./ListItemLink"
import { Image } from "atoms/Image"
import LOGO_WHITE from "assets/logoWhite.png"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import { IconSocialButton } from "../../atoms/IconSocialButton"
import { colorsBis } from "../../utils/constants/constants"

const DrawerMenu: FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }
    setIsOpenDrawer(open)
  }

  return (
    <Fragment>
      <IconButton
        sx={{ display: { xs: "flex", md: "none" } }}
        size="medium"
        onClick={toggleDrawer(true)}
        color="default"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={isOpenDrawer}
        anchor="left"
        disableDiscovery={iOS}
        disableBackdropTransition={!iOS}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        sx={{ height: "100vh" }}
      >
        <Box height="100%" width="230px" bgcolor="rgba(10,10,10,0.8)">
          <ListItem>
            <Image width="80px" image={LOGO_WHITE} />
          </ListItem>
          <Divider />
          <Box component="div" my="1rem" justifyContent="center" display={{ xs: "flex", md: "none" }}>
            <IconSocialButton
              size="small"
              iconType={<FacebookIcon />}
              background={colorsBis.white}
              color={colorsBis.black}
            />
            <IconSocialButton
              size="small"
              iconType={<InstagramIcon />}
              background={colorsBis.white}
              color={colorsBis.black}
            />
          </Box>
          <Divider />
          <List component="nav">
            <ListItemLink to="/" pathname="/" title={content.home} />
            <ListItemLink to="/carte" pathname="/carte" title={content.ourCard} />
            <ListItemLink to="/contact" pathname="/contact" title={content.contact} />
          </List>
        </Box>
      </SwipeableDrawer>
    </Fragment>
  )
}

const content = {
  home: "Accueil",
  solution: "Prestations",
  ourCard: "Notre carte",
  contact: "Contact",
}

export default DrawerMenu
