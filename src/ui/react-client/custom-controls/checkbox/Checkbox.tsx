import s from "./Checkbox.module.css"

import type { Checkbox } from "controls/checkbox"

export const CheckboxImpl: Checkbox = ({
  checked,
  onChange,
}) => (
  <input
    className={s.checkbox}
    type="checkbox"
    checked={checked}
    onChange={e => onChange(e.target.checked)}
  />
)
