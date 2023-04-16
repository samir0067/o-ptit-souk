import React, { FC, ReactNode } from "react"
import { SxProps } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { colors } from "utils/constants"
import "@fontsource/roboto/700.css"

export type ButtonProps = {
  label: string
  onClick: () => void
  icon?: ReactNode
  sx?: SxProps
  color?: string
  margin?: string
  padding?: string
  disabled?: boolean
  loading?: boolean
  className?: string
  loadingPosition?: "start" | "center" | "end"
  size?: "medium" | "small" | "large"
  variant?: "text" | "contained" | "outlined"
  backgroundColor?: string
  backgroundColorHover?: string
  borderColor?: string
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  sx,
  className,
  disabled = false,
  loading = false,
  loadingPosition = "center",
  borderColor,
  size = "medium",
  margin = "10px 0",
  padding = "7px 23px",
  variant = "contained",
  color = colors.white,
  backgroundColor = colors.lightBlue,
  backgroundColorHover = colors.lightBlue,
}: ButtonProps) => {
  return (
    <LoadingButton
      loading={loading}
      loadingPosition={loadingPosition}
      startIcon={icon}
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
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
    </LoadingButton>
  )
}

export default Button
