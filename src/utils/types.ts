export type VariantTypo =
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"

export type Auth = {
  email: string
  password: string
}

export type Profile = {
  id: string
  firstname: string
  lastname: string
  phone?: string
  isAdmin?: boolean
  street?: string
  city?: string
  zipCode?: string
  orders?: Order[]
}

export type Order = {
  onWhichDate: string | Date
  deliveryType: "delivery" | "pickUp"
  alreadyPaid?: boolean
}

export type HeadCell = {
  id: keyof Profile
  padding: "none" | "normal" | "checkbox"
  label: string
  align: "inherit" | "left" | "center" | "right" | "justify"
  minWidth?: number
}
