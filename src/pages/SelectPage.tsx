import { useRef, useState } from "react"
import Select from "components/select/Select"
import { Option } from "components/select/types"
import SelectWithLabel from "components/select/SelectWithLabel"


const MyOptions: Option<number>[] = [
  { key: "First option", value: 1 },
  { key: "Second option", value: 2 },
  { key: "Third option", value: 3 },
  { key: "Fourthth option", value: 40 },
  { key: "Eyjakvalajookul volcano of epic proportions", value: 10 },
]


export default function SelectPage() {
  const [selected, setSelected] = useState<Option<number> | null>(null)
  const [multipleSelected, setMultipleSelected] = useState<Option<number>[]>([])
  const options = useRef<Option<number>[]>([...MyOptions])

  return (
    <div className={"w-1/2 shadow p-8 mx-auto flex flex-col gap-4 bg-white h-screen"}>
      <div>
        Selector
      </div>
      <Select selected={selected} options={options.current} onChange={setSelected} />
      <Select multiple={true}
              selected={multipleSelected}
              options={options.current}
              onChange={setMultipleSelected}
      />
      <SelectWithLabel multiple={true}
                       selected={multipleSelected}
                       options={options.current}
                       onChange={setMultipleSelected}
                       label={"Hello kenobi"}
                       error={undefined}
      />

      <hr />
      <pre>
        {JSON.stringify(selected, null, 2)}
      </pre>
      <pre>

        {JSON.stringify(multipleSelected, null, 2)}
      </pre>
    </div>
  )
}
