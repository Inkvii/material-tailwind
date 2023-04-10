import { Option, SelectProps } from "components/select/types"
import Select from "components/select/Select"

export default function SelectWithLabel<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE> & {
  label: string,
  error: string | undefined
}) {


  return (
    <div className={""}>
      <legend className={"font-thin tracking-widest"}> {props.label}</legend>
      <Select {...props} />
      {props.error && <p className={"text-red-400 text-sm pt-1"}>{props.error}</p>}
    </div>
  )
}
