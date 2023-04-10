import { Listbox } from "@headlessui/react"
import clsx from "clsx"
import { CheckIcon } from "@heroicons/react/24/solid"
import { Option } from "components/select/types"

export default function SelectOption<V>(props: { option: Option<V>, isSelected: boolean }) {
  return (
    <Listbox.Option
      className={({ active, selected }) =>
        clsx(
          "relative cursor-default select-none transition-all duration-400",
          "flex justify-between gap-16",
          active && ["bg-blue-100"],
          selected && ["bg-blue-700 text-white"],
        )
      }
      value={props.option}
    >
      <span className={"block truncate"}>{props.option.key}</span>
      {props.isSelected && <CheckIcon className={"h-6 w-6 text-white"} />}
    </Listbox.Option>
  )
}
