import s from "./IconButton.module.css"

import type { IconButton } from "controls/button"

export const IconButtonImpl: IconButton = ({
  icon,
  type = "button",
  ...rest
}) => (
  <button className={s.iconButton} type={type} {...rest}>
    {icon}
  </button>
)
