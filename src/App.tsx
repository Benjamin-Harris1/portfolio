import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  )
}

export default App
