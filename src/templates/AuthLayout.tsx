import React, { FC } from "react"
import { Box, Container } from "@mui/material"
import styles from "./authLayout.module.css"
import { Title } from "../atoms/Title"
import useBreakpoints from "../services/hooks/useBreakpoints"

interface AuthLayoutProps {
  contentForm: JSX.Element
  titleForm: string
}

const AuthLayout: FC<AuthLayoutProps> = ({ contentForm, titleForm }: AuthLayoutProps) => {
  const { downSm, downMd } = useBreakpoints()

  return (
    <Box component="div" className={styles.containerImage}>
      <Container maxWidth="lg">
        <Title
          title={titleForm}
          variant={downSm ? "h5" : downMd ? "h4" : "h3"}
          component="h1"
          className={styles.title}
        />
        <Box component="div" className={styles.containers}>
          <Box component="div" className={styles.containerIllustration}>
            {/*<Image image={darkChocolate} width={50} className={styles.illustration} />*/}
          </Box>
          {contentForm}
        </Box>
      </Container>
    </Box>
  )
}

export default AuthLayout
