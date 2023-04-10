import { useRef, useState } from "react"
import { Listbox } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"


const MyOptions: SelectOption<number>[] = [
  { key: "First option", value: 1 },
  { key: "Second option", value: 2 },
  { key: "Third option", value: 3 },
  { key: "Fourthth option", value: 40 },
  { key: "Tenth option", value: 10 },
]


type SelectOption<T> = { key: string, value: T }

export default function SelectPage() {
  const [selected, setSelected] = useState<SelectOption<number> | null>(null)
  const options = useRef<SelectOption<number>[]>([...MyOptions])

  return (
    <div className={"w-1/2 shadow p-8 mx-auto flex flex-col gap-4 bg-white h-screen"}>
      <div>
        Selector
      </div>
      <Select selected={selected} options={options.current} onChange={setSelected} />
      <pre>
        {JSON.stringify(selected, null, 2)}
      </pre>
    </div>
  )
}


export function Select<V, T extends SelectOption<V>>(props: { selected: T | null, options: T[], onChange: (index: T | null) => void }) {
  return (
    <Listbox value={props.selected} onChange={(value) => {
      props.onChange(value)
    }}>
      <div className={"relative"}>

        <Listbox.Button className={"border px-4 py-2 w-full"}>
          <div className={"flex gap-4 justify-between"}>
            <label>{props.selected ? props.selected.key : "Select value"}</label>
            <ChevronDownIcon className={"text-gray-400 h-6 w-6"} />
          </div>

        </Listbox.Button>
        <Listbox.Options className={clsx(
          "max-h-[20vh] absolute z-10 mt-1 w-full",
          "overflow-auto bg-white text-base shadow-lg rounded-lg",
          "ring-1 ring-primary-400 ring-opacity-5 focus:outline-none",
          "child:px-4 child:py-2",
        )}>
          {props.options.map((option) => <SelectOption option={option} key={option.key}
                                                       isSelected={props.selected?.key === option.key} />)}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}


function SelectOption<V>(props: { option: SelectOption<V>, isSelected: boolean }) {
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
