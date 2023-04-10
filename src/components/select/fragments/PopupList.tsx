import clsx from "clsx"
import SelectOption from "components/select/fragments/SelectOption"
import { Listbox } from "@headlessui/react"
import { Option, SelectProps } from "components/select/types"

export default function PopupList<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE>) {
  function isSelected(option: Option<VALUE_TYPE>) {
    if (props.multiple) {
      return props.selected.find(o => o.key === option.key) !== undefined
    }
    return props.selected?.key === option.key
  }

  return (
    <Listbox.Options className={clsx(
      "max-h-[20vh] absolute z-10 mt-1 w-full",
      "overflow-auto bg-white text-base shadow-lg rounded-lg",
      "ring-1 ring-primary-400 ring-opacity-5 focus:outline-none",
      "child:px-4 child:py-2",
    )}>
      {props.options.map((option) =>
        <SelectOption option={option} key={option.key}
                      isSelected={isSelected(option)} />,
      )}
    </Listbox.Options>
  )
}
