import { FC } from "react"

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
}

export type Checkbox = FC<CheckboxProps>
