import s from "./Loader.module.css"

import type { Loader } from "controls/loader"

export const LoaderImpl: Loader = () => <span className={s.loader} />
