import React, {FC} from "react"
import {Box, Grid, keyframes, SxProps, Typography} from "@mui/material"
import ShapeBackground from "assets/shapeBackground.png"
import ChocoCake from "assets/images/chocoCake.png"
import Logo from "assets/splashLogo.png"
import Header from "../../molecules/Header"
import Title from "../../atoms/Title"

const HeaderSection: FC = () => {
  return (
    <Box component="div" sx={containerStyle}>
      <Box component="img" src={ShapeBackground} sx={backgroundImgStyle}/>
      <Header srcImg={Logo} sx={{zIndex: 2}}/>
      <Grid container rowSpacing={{xs: 1, md: 3}} columnSpacing={{xs: 1, md: 3}} sx={{zIndex: 2}}>
        <Grid item xs={12} md={4} sx={gridImg}>
          <Box component="img" src={ChocoCake} sx={imageStyles}/>
        </Grid>
        <Grid item xs={12} md={8} sx={gridTitles}>
          <Title title={content.title} variant="h2" component="h1" slideDirection="left"
                 sx={titleStyles}/>
          <Typography variant="h5" component="h3" gutterBottom sx={titleStyles}>
            {content.subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export const rotate = keyframes`
  0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-45px);
  }
  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px) scale3d(1.15, 0.85, 1);
  }
  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px) scale3d(0.85, 1.15, 1);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px) ;
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px) scale3d(1, 1, 1);
  }
`;

const containerStyle: SxProps = {
  minHeight: "90vh",
  position: "relative",
  display: "flex",
  flexDirection: "column"
}
const backgroundImgStyle: SxProps = {position: "absolute", right: 0, zIndex: 1, height: "80vh"}
const gridImg: SxProps = {display: "flex", alignItems: "center", overflow: "hidden", height: "90vh"}
const imageStyles: SxProps = {
  animation: `${rotate} 2s ease 0s 1 normal forwards`,
  width: "100%",
  height: "100%",
  objectFit: "contain"
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
  fontWeight: "bold",
}

const content = {
  headerTitle: "Ô Ptit Souk",
  title: "De quoi avez-vous envie prochainement ?",
  subTitle:
    "Que vous cherchiez un déjeuner pratique à emporter ou un délicieux repas pour vos invités, nous avons ce qu'il vous faut.",
}
export default HeaderSection
