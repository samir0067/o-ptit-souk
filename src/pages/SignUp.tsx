import React, { FC, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase/config"
import { Box, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { Auth } from "../utils/types"
import { yupResolver } from "@hookform/resolvers/yup/dist/yup"
import { authSchema } from "../utils/validation"
import { useNavigate } from "react-router-dom"
import InputField from "../molecules/InputField"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import Button from "../atoms/Button"
import { setUser, User } from "services/store/userSlice"
import { useAppDispatch, useAppSelector } from "../services/hooks/useState"
import styles from "./signUp.module.css"
import AuthLayout from "../templates/AuthLayout"
import { RootState } from "services/store"

const SignUp: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const signUpWithEmailAndPassword = async (data: Auth) => {
    setIsLoading(true)
    setError("")
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log("user userCredential", user)
        if (user) {
          const newUser: User = { uid: user.uid, email: user.email || "" }
          dispatch(setUser(newUser))
        }
        navigate("/clients")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(`ErrorCode: ${errorCode}; ErrorMessage: ${errorMessage}`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({
    resolver: yupResolver(authSchema),
    reValidateMode: "onBlur",
    shouldFocusError: false,
  })

  const user = useAppSelector((state: RootState) => state.user)

  if (user) {
    console.log(" L'utilisateur est connecté ==>", user)
    // L'utilisateur est connecté
  } else {
    console.log(" L'utilisateur est déconnecté==>")
    // L'utilisateur est déconnecté
  }

  return (
    <AuthLayout
      titleForm={content.title}
      contentForm={
        <Box className={styles.containerForm} component="form">
          <Typography variant="h6">{content.titleForm}</Typography>
          <InputField name="email" control={control} error={errors} label="E-mail" />
          <InputField name="password" control={control} error={errors} label="Mot de passe" />
          <Button
            label="Inscription"
            loading={isLoading}
            onClick={handleSubmit(signUpWithEmailAndPassword)}
            icon={<HowToRegIcon />}
          />
        </Box>
      }
    />
  )
}

const content = {
  title: "Inscrivez-vous dès maintenant pour profiter de nos services !",
  titleForm: "Créer un compte",
}

export default SignUp
