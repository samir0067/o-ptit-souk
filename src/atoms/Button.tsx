import React, { FC, ReactNode } from "react"
import { Button as MuiButton, SxProps } from "@mui/material"
import { colors } from "utils/constants"
import "@fontsource/roboto/700.css"

type ButtonProps = {
  label: string
  onClick: () => void
  icon?: ReactNode
  sx?: SxProps
  color?: string
  margin?: string
  padding?: string
  disabled?: boolean
  size?: "medium" | "small" | "large"
  variant?: "text" | "contained" | "outlined"
  backgroundColor?: string
  backgroundColorHover?: string
  borderColor?: string
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant,
  icon,
  sx,
  size,
  margin,
  padding,
  disabled,
  color,
  backgroundColor,
  backgroundColorHover,
  borderColor,
}: ButtonProps) => {
  return (
    <MuiButton
      startIcon={icon}
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        margin: margin,
        padding: padding,
        borderRadius: "9px",
        fontFamily: "Roboto",
        borderColor: borderColor,
        backgroundColor: variant === "contained" ? backgroundColor : "",
        color: color,
        "&:hover": { backgroundColor: backgroundColorHover },
      }}
    >
      {label}
    </MuiButton>
  )
}

Button.defaultProps = {
  size: "medium",
  margin: "10px 0",
  padding: "7px 23px",
  variant: "contained",
  color: colors.white,
  backgroundColor: colors.lightBlue,
  backgroundColorHover: colors.lightBlue,
}

export default Button
