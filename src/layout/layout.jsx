import { Outlet } from "react-router-dom"
import Sidebar from "../pages/Sidebar/sidebar"

export const Layout = () => {
    return (
        <div className="flex bg-white">
            <Sidebar />
            <Outlet />
        </div>
    )
}