import { Option, SelectProps } from "components/select/types"
import Select from "components/select/Select"
import { useMemo } from "react"
import clsx from "clsx"

export default function SelectWithLabel<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE> & {
  label: string,
  error: string | undefined
  labelClass?: string
  labelErrorClass?: string
}) {

  const isError = useMemo(() => {
    return props.isError ?? !!props.error
  }, [props.isError, props.error])


  const labelClass = useMemo(() => {
    const defaultClass = "font-thin tracking-widest"
    const defaultErrorClass = "text-red-400"
    return clsx(props.labelClass || defaultClass, isError && [props.labelErrorClass ?? defaultErrorClass])
  }, [props.labelClass, props.labelErrorClass, isError])


  return (
    <div className={""}>
      <label className={labelClass}> {props.label}</label>
      <Select {...props} isError={isError} />
      {props.error && <p className={"text-red-400 text-sm pt-1"}>{props.error}</p>}
    </div>
  )
}
