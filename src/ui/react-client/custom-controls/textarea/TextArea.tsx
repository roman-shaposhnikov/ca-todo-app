import cl from "classnames"

import s from "./TextArea.module.css"

import type { TextArea } from "controls/textarea"

export const TextAreaImpl: TextArea = ({
  value,
  className,
  onChange,
  ...rest
}) => (
  <textarea
    className={cl(s.textArea, className)}
    value={value}
    onChange={e => onChange(e.target.value)}
    {...rest}
  />
)
