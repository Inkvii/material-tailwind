import { ReactElement } from "react"
import HomePage from "pages/HomePage"
import SelectPage from "pages/SelectPage"

interface Route {
  path: string
  component: ReactElement
}

const home: Route = {
  path: "/",
  component: <SelectPage />,
}
const form: Route = {
  path: "/form",
  component: <HomePage />,
}

export default {
  home,
  form,
}
