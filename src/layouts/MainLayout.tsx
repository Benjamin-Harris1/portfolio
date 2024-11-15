import { Header } from "../Header"
import { Outlet } from "react-router-dom"


export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pt-20">
            <Outlet />
          </main>
        </div>
      )
}
