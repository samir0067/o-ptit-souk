import React, { FC } from "react"
import { Container, Paper } from "@mui/material"
import Footer from "molecules/Footer"

type ItemLayoutProps = {
  main: JSX.Element
  titleHeader: string
}

const ItemLayout: FC<ItemLayoutProps> = ({ main }: ItemLayoutProps) => {
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
