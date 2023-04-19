import React, { FC } from "react"
import { Container, Paper } from "@mui/material"
import Footer from "molecules/Footer"

type AdminLayoutProps = {
  main: JSX.Element
  titleHeader: string
}

const ItemLayout: FC<AdminLayoutProps> = ({ main, titleHeader }: AdminLayoutProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ marginBottom: "96px", width: "auto", padding: "12px" }}>
          {main}
        </Paper>
      </Container>
      <Footer />
    </>
  )
}

export default ItemLayout
