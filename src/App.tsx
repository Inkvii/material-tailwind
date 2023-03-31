import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "router/routes"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routes).map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
