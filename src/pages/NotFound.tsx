import React, { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import Button from "atoms/Button"

const NotFound: FC = () => {
  const navigate = useNavigate()

  return (
    <main>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="body1">{"Oops! La page demandée n'existe pas"}</Typography>
        <Button label="Revenir à la page d'accueil" onClick={() => navigate("/")} />
      </Box>
    </main>
  )
}

export default NotFound
