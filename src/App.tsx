import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { useScrollToTop } from "./hooks/useScrollToTop"

function App() {
  useScrollToTop()
  
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
