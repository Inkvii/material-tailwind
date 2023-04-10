import { Listbox } from "@headlessui/react"
import type { Option, SelectProps } from "components/select/types"
import Selector from "components/select/fragments/Selector"
import PopupList from "components/select/fragments/PopupList"

export default function Select<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE>) {

  return (
    <Listbox value={props.selected} onChange={props.onChange} multiple={props.multiple}>
      <div className={"relative"}>
        <Selector {...props} />
        <PopupList {...props} />
      </div>
    </Listbox>
  )
}
