import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config"
import { Auth } from "../../utils/types"

export const signUpWithEmailAndPassword = async (login: Auth) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, login.email, login.password)
    console.log("User signed up successfully:", userCredential.user)
    return userCredential
  } catch (error) {
    console.error("Error signing up user:", error)
    throw error
  }
}
