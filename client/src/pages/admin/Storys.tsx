import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { RiMovie2Fill } from "react-icons/ri"
import { NavLink } from "react-router"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa"
import { useState } from "react"

const Storys = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <AdminContainer>
      <div className="bg-[#e64a45] rounded-t-sm p-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><RiMovie2Fill />Storys</h1>
            <div className="relative inline-block text-left">
              <button onClick={() => setDropdown(!dropdown)} className="text-white bg-blue-700 hover:bg-blue-800 text-md px-4 py-2.5 rounded-md flex items-center justify-between gap-3">category<FaCaretDown /></button>
              {dropdown && (
                <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-xl z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">ซับไทย</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">ซับไทย</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">ซับไทย</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">ซับไทย</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100">ซับไทย</button></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <input type="search" className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
          <NavLink to={"/admin/storys/add"}><button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">Add</button></NavLink>
        </div>
      </div>

      <div className="bg-[#2e3338] p-2 rounded-b-sm">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-8 gap-3">

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

          <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
            <NavLink to={"/admin/storys/episode"}>
              <div className="relative">
                <div className="relative">
                  <img src="/images/anime/test.jpg" loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                  <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">ยังไม่จบ</span>
                </div>
                <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่1</span>
              </div>
            </NavLink>
            <div className="flex items-center gap-2 mt-3">
              <button className="p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center"><FaEdit className="text-lg text-white" /></button>
              <button className="p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center"><MdDelete className="text-lg text-white" /></button>
            </div>
          </div>

        </div>
        <div className="mt-7">

        </div>
      </div>
    </AdminContainer>
  )
}

export default Storys