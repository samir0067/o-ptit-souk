import React, { FC } from "react"
import { Box, Grid, Typography } from "@mui/material"
import ShapeBackground from "assets/shapeBackground.png"
import ChocoCake from "assets/images/chocoCake.png"
import Logo from "assets/splashLogo.png"
import Header from "../../molecules/Header"

const HeaderSection: FC = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "70vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box component="img" src={ShapeBackground} sx={{ position: "absolute", right: 0, zIndex: 1 }} />
      <Header title={content.headerTitle} srcImg={Logo} altImg={"logo"} sx={{ zIndex: 2, bgcolor: "red" }} />
      <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, md: 3 }} sx={{ zIndex: 2 }}>
        <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", bgcolor: "darkgrey" }}>
          <Box component="img" src={ChocoCake} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingX: "5%",
            bgcolor: "darkred",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontFamily: "Poppins", textAlign: "center", fontWeight: "bold" }}
          >
            {content.title}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{ fontFamily: "Poppins", textAlign: "center", fontWeight: "bold" }}
          >
            {content.subTitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

const content = {
  headerTitle: "Ô Ptit Souk",
  title: "De quoi avez-vous besoin prochainement ?",
  subTitle:
    "Que vous cherchiez un déjeuner pratique à emporter ou un délicieux repas pour vos invités, nous avons ce qu'il vous faut.",
}
export default HeaderSection
