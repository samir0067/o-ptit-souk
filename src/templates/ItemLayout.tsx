import React, { FC } from "react"
import { Container, Paper } from "@mui/material"
import Footer from "molecules/Footer"

type StructureProps = {
  main: JSX.Element
  titleHeader: string
}

const ItemLayout: FC<StructureProps> = ({ main }: StructureProps) => {
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
