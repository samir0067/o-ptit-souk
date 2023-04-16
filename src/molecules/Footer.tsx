import React from "react"
import { Box, Container, Grid, Link, Typography } from "@mui/material"
import styles from "./footer.module.css"

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={`${styles.section} ${styles.sectionTitle}`}>
              Section 1
            </Typography>
            <Link href="#" color="inherit" className={styles.link}>
              Lien 1
            </Link>
            <Link href="#" color="inherit" className={styles.link}>
              Lien 2
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={`${styles.section} ${styles.sectionTitle}`}>
              Section 2
            </Typography>
            <Link href="#" color="inherit" className={styles.link}>
              Lien 1
            </Link>
            <Link href="#" color="inherit" className={styles.link}>
              Lien 2
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
