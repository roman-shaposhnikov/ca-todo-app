import { FC, ReactNode } from "react"

export type ChipProps = {
  text: ReactNode
  onClick?: () => void
}

export type Chip = FC<ChipProps>
