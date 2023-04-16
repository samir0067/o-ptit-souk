import React, { FC } from "react"
import { Box, Typography } from "@mui/material"
import styles from "./catererSection.module.css"

const CatererSection: FC = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography variant="h4" className={styles.title}>
          Le métier de traiteur
        </Typography>
        <Typography variant="body1" className={styles.paragraph}>
          {`Le métier de traiteur consiste à préparer et fournir des plats cuisinés pour divers événements et occasions,
          tels que des mariages, des réceptions, des fêtes d'entreprise ou des événements familiaux. Les traiteurs sont
          responsables de la planification, de la préparation et de la présentation des plats, en veillant à ce qu'ils
          soient savoureux et esthétiquement plaisants. Ils travaillent souvent en étroite collaboration avec leurs
          clients pour créer des menus personnalisés et s'assurer que leurs préférences et exigences sont respectées.`}
        </Typography>
        {/* Ajoutez d'autres paragraphes en suivant le modèle ci-dessus */}
      </Box>
    </Box>
  )
}

export default CatererSection
