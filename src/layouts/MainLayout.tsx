import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
    return (
        <div className="h-screen bg-gray-900 flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      )
}
