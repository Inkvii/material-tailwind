import { useCallback, useRef, useState } from "react"
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

type SelectProps<VALUE_TYPE, OBJECT_TYPE extends SelectOption<VALUE_TYPE>> = {
  selected: OBJECT_TYPE[]
  options: OBJECT_TYPE[]
  onChange: (selected: OBJECT_TYPE[]) => void
  multiple: true
} | {
  selected: OBJECT_TYPE | null
  options: OBJECT_TYPE[]
  onChange: (selected: OBJECT_TYPE | null) => void
  multiple?: false
}

export default function SelectPage() {
  const [selected, setSelected] = useState<SelectOption<number> | null>(null)
  const [multipleSelected, setMultipleSelected] = useState<SelectOption<number>[]>([])
  const options = useRef<SelectOption<number>[]>([...MyOptions])

  return (
    <div className={"w-1/2 shadow p-8 mx-auto flex flex-col gap-4 bg-white h-screen"}>
      <div>
        Selector
      </div>
      <Select selected={selected} options={options.current} onChange={setSelected} />
      <Select multiple={true}
              selected={multipleSelected}
              options={options.current}
              onChange={setMultipleSelected} />
      <pre>
        {JSON.stringify(selected, null, 2)}
      </pre>
      <pre>

        {JSON.stringify(multipleSelected, null, 2)}
      </pre>
    </div>
  )
}


export function Select<VALUE_TYPE, OBJECT_TYPE extends SelectOption<VALUE_TYPE>>(props: SelectProps<VALUE_TYPE, OBJECT_TYPE>) {

  const Label = useCallback(() => {
    if (!props.selected || (props.multiple && !props.selected?.length)) {
      return <label>Select a value from list</label>
    }
    // is multiple value
    if (props.multiple) {
      return <label>{props.selected.map(s => s.key).join(", ")}</label>
    }

    return <label>{props.selected.key}</label>

  }, [props.selected])

  function isSelected(option: SelectOption<VALUE_TYPE>) {
    if (props.multiple) {
      return props.selected.find(o => o.key === option.key) !== undefined
    }

    return props.selected?.key === option.key
  }

  return (
    <Listbox value={props.selected} onChange={props.onChange} multiple={props.multiple}>
      <div className={"relative"}>

        <Listbox.Button className={"border px-4 py-2 w-full"}>
          <div className={"flex gap-4 justify-between"}>
            <Label />
            <ChevronDownIcon className={"text-gray-400 h-6 w-6"} />
          </div>

        </Listbox.Button>
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
