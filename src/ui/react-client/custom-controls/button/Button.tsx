import cl from "classnames"

import s from "./Button.module.css"

import type { Button } from "controls/button"

export const ButtonImpl: Button = ({
  text,
  type = "button",
  className,
  onClick,
  ...rest
}) => (
  <button
    className={cl(s.button, className)}
    onClick={onClick}
    {...rest}
  >
    {text}
  </button>
)
