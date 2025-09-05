import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface Props {
    children: ReactNode
}

const UserContainer = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main className="bg-[url('/images/bg.png')] bg-cover bg-fixed pt-1">
                <div className="container max-w-[1140px] w-full mx-auto">
                    {children}
                </div>
                <Footer />
            </main>
        </>
    )
}

export default UserContainer