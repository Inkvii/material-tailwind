import { ReactElement } from "react"
import HomePage from "pages/HomePage"

interface Route {
  path: string
  component: ReactElement
}

const home: Route = {
  path: "/",
  component: <HomePage/>
}

export default {
  home
}
