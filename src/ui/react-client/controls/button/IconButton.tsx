import { ButtonHTMLAttributes, FC, ReactNode } from "react"

export type IconButtonProps = {
  icon: ReactNode
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export type IconButton = FC<IconButtonProps>
