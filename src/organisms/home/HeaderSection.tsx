import React, { FC } from "react"
import { Box, Grid, SxProps, Typography } from "@mui/material"
import ShapeBackground from "assets/shapeBackground.png"
import ChocoCake from "assets/images/macarons.png"
import { Title } from "../../atoms/Title"
import NavBar from "../navBar/NavBar"
import useBreakpoints from "../../services/hooks/useBreakpoints"
import Typewriter from "typewriter-effect"
import { rotate } from "../../utils/styles/keyframes.style"

const HeaderSection: FC = () => {
  const { downSm, downMd } = useBreakpoints()

  const containerStyle: SxProps = {
    minHeight: "40vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  }
  const backgroundImgStyle: SxProps = { position: "absolute", right: 0, zIndex: 1, height: "75%" }
  const gridImgStyles: SxProps = {
    display: downMd ? "none" : "flex",
    overflow: "hidden",
    height: "100%",
    justifyContent: "left",
  }
  const imgStyles: SxProps = {
    animation: `${rotate} 2s ease 0s 1 normal forwards`,
    marginTop: "120px",
    width: "90%",
    height: "100%",
    objectFit: "contain",
  }
  const gridTitles: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingX: "5%",
  }
  const titleStyles: SxProps = {
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "500",
  }

  return (
    <Box component="div" sx={containerStyle}>
      <NavBar />
      <Box component="img" src={ShapeBackground} sx={backgroundImgStyle} />
      <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, md: 3 }} sx={{ zIndex: 2 }}>
        <Grid item xs={12} md={4} sx={gridImgStyles}>
          <Box component="img" src={ChocoCake} sx={imgStyles} />
        </Grid>
        <Grid item xs={12} md={8} sx={gridTitles}>
          <Title
            component="h1"
            variant={downSm ? "h5" : downMd ? "h4" : "h3"}
            title={content.title}
            writerEffect={
              <Typewriter
                options={{
                  strings: ["Du sucré ?", "Du salé ?"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                }}
              />
            }
          />
          <Typography variant={downSm ? "h6" : "h5"} component="h3" gutterBottom sx={titleStyles}>
            {content.subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

const content = {
  headerTitle: "Ô Ptit Souk",
  title: "Qu'est-ce qui vous ferez plaisir ? ",
  subTitle:
    "Que vous cherchiez un déjeuner pratique à emporter ou un délicieux repas pour vos invités, nous avons ce qu'il vous faut.",
}
export default HeaderSection
