import React, { FC } from "react"
import { Box, Grid, SxProps } from "@mui/material"
import styles from "./infoSection.module.css"
import Card from "../../molecules/Card"
import { useNavigate } from "react-router-dom"

const InfoSection: FC = () => {
  const navigate = useNavigate()

  const gridTitles: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: "75vh",
  }

  return (
    <Box component="div" className={styles.backgroundImage}>
      <Grid container columnSpacing={{ xs: 1, md: 3 }} sx={{ zIndex: 2 }}>
        <Grid item xs={12} sx={gridTitles}>
          <Card
            title={content.title}
            description={content.description}
            btnLabel={content.btnCardLabel}
            btnOnClick={() => navigate("/carte")}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

const content = {
  headerTitle: "Ô Ptit Souk",
  title:
    "Bienvenue Chez Ô Ptit Souk, votre traiteur en ligne spécialisé en délices sucrés et salés pour tous vos événements !",
  description:
    "Nous sommes passionnés par la création de saveurs uniques et la satisfaction. Nous vous proposons une large gamme de produits sucrés et salés, préparés avec soin à partir d'ingrédients de qualité et toujours frais.",
  btnCardLabel: "Visiter la carte",
}
export default InfoSection
