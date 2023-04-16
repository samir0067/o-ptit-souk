import React, { FC } from "react"
import { Box, Grid } from "@mui/material"
import styles from "./infoSection.module.css"
import Card from "../../molecules/Card"
import { useNavigate } from "react-router-dom"
import { colors } from "../../utils/constants"
import aperitif2 from "assets/images/aperitif2.jpg"
import burgerTray2 from "assets/images/burgerTray2.jpg"
import logoBackBlack from "assets/logoBackBlack.jpg"

const InfoSection: FC = () => {
  const navigate = useNavigate()

  return (
    <Box component="div" className={styles.containerImage}>
      <Grid container spacing={{ xs: 1, md: 3 }} className={styles.gridContainer}>
        <Card
          img={aperitif2}
          title={content.title}
          backgroundColor={colors.lightCoral}
          btnLabel={content.btnCardLabel}
          btnBackgroundColor={colors.darkCoral}
          btnOnClick={() => navigate("/carte")}
        />
        <Card
          img={logoBackBlack}
          title={content.title2}
          titleColor={colors.white}
          btnColor={colors.black}
          btnBackgroundColor={colors.lightCoral}
          btnLabel={content.btnCardLabel}
          btnOnClick={() => navigate("/carte")}
          backgroundColor={colors.darkCoral}
          gridClassName={styles.centerCard}
        />
        <Card
          img={burgerTray2}
          title={content.title3}
          btnLabel={content.btnCardLabel}
          btnOnClick={() => navigate("/carte")}
          backgroundColor={colors.lightCoral}
          btnBackgroundColor={colors.darkCoral}
        />
      </Grid>
    </Box>
  )
}

const content = {
  headerTitle: "Ô Ptit Souk",
  title:
    "Bienvenue Chez Ô Ptit Souk, votre traiteur en ligne spécialisé en délices sucrés et salés pour tous vos événements !",
  title2: "Passionnés par la création de saveurs uniques et la satisfaction.",
  title3:
    "Avec une large gamme de produits sucrés et salés, préparés avec soin à partir d'ingrédients de qualité et toujours frais.",
  btnCardLabel: "Visiter la carte",
}
export default InfoSection
