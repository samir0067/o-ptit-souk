import React, {FC, InputHTMLAttributes} from "react"
import * as hookForm from "react-hook-form"
import { InputAdornment } from "@mui/material"
import { TextField } from "utils/styles/textField.style"

type InputFieldProps = {
  control: hookForm.Control<any> | undefined
  error: hookForm.FieldErrors
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  helperText?: any
  icon?: JSX.Element
  type?: InputHTMLAttributes<unknown>["type"]
}

const InputField: FC<InputFieldProps> = ({
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
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          inputRef={ref}
          disabled={disabled}
          type={type}
          label={label}
          value={value}
          onBlur={onBlur}
          error={!!error[name]}
          placeholder={placeholder}
          helperText={(error[name] && error[name]?.message) || helperText}
          onChange={(value1) => onChange(value1)}
          InputProps={{
            endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
          }}
        />
      )}
    />
  )
}

InputField.defaultProps = {
  type: "text",
}

export default InputField
