
import { NavLink } from "react-router"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
   return (
      <nav className="fixed top-0 left-0 w-full h-[50px] bg-gradient-to-b from-[#484B52] via-[#3F4248] to-[#36393E] border border-gray-800 shadow-xl/30 z-50">
         <div className="max-w-[1140px] w-full mx-auto  flex justify-between items-center h-full px-4">
            <NavLink to="/" className={"text-lg text-[#C8C8C8] hover:text-white"}>หน้าแรก</NavLink>

            <div className="block md:hidden">
               <div className="border border-[#232427] rounded-sm px-2.5 py-1.5">
                  <GiHamburgerMenu className="text-xl text-[#C8C8C8]" />
               </div>
            </div>
            <div className="hidden md:block">
               <div className="flex items-center">
                  <input type="search" className="bg-white p-2 text-sm px-3 placeholder:text-sm placeholder-gray-500 rounded-sm focus:border-blue-200" placeholder="ค้นหาการ์ตูน" />
                  <button className="bg-[#62C462] text-white text-xs px-2 py-1.5 ml-1 rounded-xs">ค้นหาการ์ตูน</button>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar