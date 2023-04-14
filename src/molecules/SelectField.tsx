import React, { FC, InputHTMLAttributes } from "react"
import * as hookForm from "react-hook-form"
import { TextField } from "molecules/textField.style"

type SelectFieldProps = {
  control: hookForm.Control<any> | undefined
  error: hookForm.FieldErrors
  name: string
  label: string
  options: { key: string; label: string }[]
  placeholder?: string
  disabled?: boolean
  helperText?: any
  icon?: JSX.Element
  type?: InputHTMLAttributes<unknown>["type"]
}

const SelectField: FC<SelectFieldProps> = ({
  control,
  helperText,
  error,
  name,
  label,
  placeholder,
  disabled,
  options,
}: SelectFieldProps) => {
  return (
    <hookForm.Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          select
          inputRef={ref}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          label={label}
          onBlur={onBlur}
          error={!!error[name]}
          helperText={(error[name] && error[name]?.message) || helperText}
          onChange={(newValue) => onChange(newValue)}
          variant="outlined"
          SelectProps={{ native: true }}
        >
          <option aria-label="None" value="" />
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </TextField>
      )}
    />
  )
}

export default SelectField
