import React, { FC } from "react"
import * as hookForm from "react-hook-form"
import { InputAdornment } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { TextField } from "utils/styles/textField.style"
import { InputFieldProps } from "utils/types"

const DateField: FC<InputFieldProps> = ({
  control,
  error,
  name,
  label,
  placeholder,
  disabled,
  type,
  icon,
  helperText,
}: InputFieldProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={label}
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(value) => onChange(value)}
            renderInput={(params: any) => (
              <TextField
                {...params}
                inputRef={ref}
                disabled={disabled}
                type={type}
                label={label}
                value={value}
                onBlur={onBlur}
                error={!!error[name]}
                placeholder={placeholder}
                helperText={(error[name] && error[name]?.message) || helperText}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  )
}

export default DateField
