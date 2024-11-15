import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pt-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      )
}
