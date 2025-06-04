import { FC, TextareaHTMLAttributes } from "react"

export type TextAreaProps = {
  value: string
  onChange: (value: string) => void
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">

export type TextArea = FC<TextAreaProps>
