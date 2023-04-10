import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { Listbox } from "@headlessui/react"
import { useCallback } from "react"
import clsx from "clsx"
import { Option, SelectProps } from "components/select/types"

export default function Label<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE>) {
  const Label = useCallback(() => {
    let text = "Select a value from list"
    let isPlaceholderUsed = true

    if (props.multiple && props.selected.length > 0) {
      text = props.selected.map(s => s.key).join(", ")
      isPlaceholderUsed = false
    } else if (props.selected && !props.multiple) {
      text = props.selected.key
      isPlaceholderUsed = false
    }

    return <label className={clsx("truncate", isPlaceholderUsed && ["text-gray-500"])}>{text}</label>

  }, [props.selected])

  return (
    <Listbox.Button className={"border px-4 py-2 w-full"}>
      <div className={"flex gap-4 justify-between"}>
        <Label />
        <ChevronDownIcon className={"text-gray-400 h-6 w-6 shrink-0"} />
      </div>

    </Listbox.Button>
  )
}

