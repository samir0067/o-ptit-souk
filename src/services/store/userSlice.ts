import { createSlice } from "@reduxjs/toolkit"

export interface User {
  uid: string
  email: string
}

const initialState: User | null = null

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload
    },
    clearUser: () => {
      return initialState
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
