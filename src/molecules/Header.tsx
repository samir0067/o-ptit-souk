import React, { FC } from "react"
import { Box, ButtonGroup, SxProps } from "@mui/material"
import useBreakpoints from "services/hooks/useBreakpoints"
import Button from "../atoms/Button"
import { colors } from "../utils/constants"
import { useNavigate } from "react-router-dom"

type HeaderProps = {
  srcImg: string
  sx?: SxProps
}

const Header: FC<HeaderProps> = ({ srcImg, sx }: HeaderProps) => {
  const { downSm } = useBreakpoints()
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={downSm ? "column" : "row"}
      paddingX="30px"
      justifyContent={downSm ? "center" : "space-between"}
      sx={{ ...sx }}
    >
      <Box component="img" src={srcImg} height="100px" />
      <ButtonGroup>
        <Button
          variant="text"
          label={content.btnSignIn}
          backgroundColorHover={colors.darkBlue}
          onClick={() => undefined}
        />
        <Button
          label={content.btnSignUp}
          backgroundColor={colors.darkBlue}
          backgroundColorHover={colors.transparent}
          onClick={() => navigate("/inscription")}
        />
      </ButtonGroup>
    </Box>
  )
}

const content = {
  btnSignIn: "Connexion",
  btnSignUp: "Inscription",
}

export default Header
