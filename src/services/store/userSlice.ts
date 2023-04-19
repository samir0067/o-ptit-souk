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
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
