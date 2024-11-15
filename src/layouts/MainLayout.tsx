import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col relative">
          <Header />
          <main className="flex-1 flex flex-col pb-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      )
}
