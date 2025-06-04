import cl from "classnames"

import s from "./TextField.module.css"

import type { TextField } from "controls/text-field"

export const TextFieldImpl: TextField = ({
  value,
  width,
  className,
  onChange,
  ...rest
}) => (
  <input
    style={{ width: width ?? "100%" }}
    className={cl(s.input, className)}
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    {...rest}
  />
)
