import { ButtonHTMLAttributes, FC, ReactNode } from "react"

export type ButtonProps = {
  text: ReactNode
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export type Button = FC<ButtonProps>
