import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="bg-[url('/images/bg.png')] bg-cover bg-fixed">
      {children}
    </main>
  )
}

export default AuthLayout