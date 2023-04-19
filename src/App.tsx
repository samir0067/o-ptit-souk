import React, { FC, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import SignUp from "./pages/SignUp"
import Profiles from "pages/Profiles"
import NotFound from "pages/NotFound"
import { clearUser, setUser, User } from "services/store/userSlice"
import { auth } from "services/firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { useAppDispatch } from "./services/hooks/useState"

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        const loggedInUser: User = { uid: user.uid, email: user.email || "" }
        console.log("loggedInUser ==>", loggedInUser)
        dispatch(setUser(loggedInUser))
      } else {
        // L'utilisateur est déconnecté
        dispatch(clearUser())
      }
    })
    // Nettoyage lors du démontage du composant
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<SignUp />} />
      <Route path="/clients" element={<Profiles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
