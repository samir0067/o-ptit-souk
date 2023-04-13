import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import SignUp from "./pages/SignUp"
import Profiles from "pages/Profiles"
import NotFound from "pages/NotFound"

const App: FC = () => {
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
