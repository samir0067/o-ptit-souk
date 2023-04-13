import { atom } from "recoil"

export const todoListState = atom({
  key: "TodoList",
  default: ["azer", "tyui", 1],
})
