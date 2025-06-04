import { FC, InputHTMLAttributes } from "react"

export type TextFieldProps = {
  value: string
  width?: string
  onChange: (value: string) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

export type TextField = FC<TextFieldProps>
