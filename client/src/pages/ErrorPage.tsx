import { NavLink } from "react-router"

const ErrorPage = () => {
  return (
    <main className="bg-[url('/images/error.jpg')] h-screen w-screen bg-cover">
        <div className="flex flex-col items-center justify-center h-screen bg-black/50">
           <h1 className="text-8xl font-extrabold mb-3 text-red-500">404</h1>
           <h2 className="text-2xl font-medium text-gray-300 mb-2">Page Not Found</h2>
           <p className="text-gray-200 text-center mb-4 px-3">เราไม่พบหน้าที่คุณกำลังค้นหา อาจถูกย้ายหรือลบไปแล้ว</p>
           <button className="px-6 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition">
              <NavLink to={"/"}>หน้าหลัก</NavLink>
           </button>
        </div>
    </main>
  )
}

export default ErrorPage