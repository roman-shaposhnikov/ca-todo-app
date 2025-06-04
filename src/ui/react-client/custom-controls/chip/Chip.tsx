import s from "./Chip.module.css"

import type { Chip } from "controls/chip"

export const ChipImpl: Chip = ({ text, onClick }) => {
  return (
    <div className={s.chip} onClick={onClick}>
      {text}
    </div>
  )
}
