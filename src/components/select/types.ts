export type Option<T> = { key: string, value: T }

export type SelectProps<VALUE_TYPE, OBJECT_TYPE extends Option<VALUE_TYPE>> = {
  selected: OBJECT_TYPE[]
  options: OBJECT_TYPE[]
  onChange: (selected: OBJECT_TYPE[]) => void
  multiple: true
  selectErrorClass?: string
  isError?: boolean
} | {
  selected: OBJECT_TYPE | null
  options: OBJECT_TYPE[]
  onChange: (selected: OBJECT_TYPE | null) => void
  multiple?: false
  selectErrorClass?: string
  isError?: boolean
}
