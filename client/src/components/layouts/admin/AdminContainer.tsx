import type { ReactNode } from "react"
import Sidebar from "./Sidebar"

interface Props {
    children: ReactNode
}

const AdminContainer = ({ children }: Props) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 h-screen p-3 sm:p-10 bg-[#1f2326] overflow-y-auto">
                    {children}
                </main>
            </div>
        </>
    )
}

export default AdminContainer