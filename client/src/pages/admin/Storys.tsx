import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { RiMovie2Fill } from "react-icons/ri"
import { NavLink, useLocation } from "react-router"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa"
import { useState, useEffect } from "react"
import { ToastContainer } from "react-toastify"
import { toastError, toastSuccess } from "../../utils/toast"
import { FaTag } from "react-icons/fa"
import type { storys } from "../../types/interface"
import axios from "axios"
import Pagination from "../../components/layouts/admin/Pagination"
import Loading from "../../components/layouts/admin/Loading"

const Storys = () => {
  const location = useLocation()
  const [dropdown, setDropdown] = useState(false)

  const [story, setStory] = useState<storys[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (location.state?.success) {
      toastSuccess(location.state.success)
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const Storys = async (pageNum: number = 1) => {
    try {
      setLoading(true)

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/storys`, {
        params: { page: pageNum, limit: 10, search: search },
      })

      setStory(res.data.data)
      setPage(res.data.page)
      setTotalPage(res.data.total_page)
    } catch (error: any) {
      toastError(error.response?.data?.error || "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    Storys(page)
  }, [page, search])

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
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
          <NavLink to={"/admin/storys/add"}><button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">Add</button></NavLink>
        </div>
      </div>

      <div className="bg-[#2e3338] p-2 rounded-b-sm">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 gap-3">

          {loading ? (
            <Loading />
          ) : story.length > 0 ? (
            story.map((items) => (
              <div key={items.id} className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1 ">
                <NavLink to={`/admin/storys/episode/${items.id}`}>
                  <div className="relative">
                    <div className="relative">
                      <img src={items.cover_image} loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt="anime" />
                      <span className="absolute top-0 right-0 text-[10px] font-bold bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md text-white">{items.status === "ongoing" ? "ยังไม่จบ" : items.status === "completed" ? "จบแล้ว" : ""}</span>
                    </div>
                    <span className="absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline">{items.title}</span>
                  </div>
                </NavLink>
                <div className="flex items-center gap-2 mt-3">
                  <NavLink to={`/admin/storys/storytag/${items.id}`} className={`p-2 bg-blue-500 hover:bg-blue-700 w-full rounded-md flex items-center justify-center`}><FaTag className="text-lg text-white" /></NavLink>
                  <NavLink to={``} className={`p-2 bg-yellow-500 hover:bg-yellow-700 w-full rounded-md flex items-center justify-center`} ><FaEdit className="text-lg text-white" /></NavLink>
                  <NavLink to={``} className={`p-2 bg-red-500 hover:bg-red-700  w-full rounded-md flex items-center justify-center`}><MdDelete className="text-lg text-white" /></NavLink>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <p className="p-4 text-white">ไม่มีข้อมูล</p>
            </div>
          )}

        </div>
        
        <div className="mt-7">
          <Pagination currentPage={page} totalPages={totalPage} onPageChange={(page) => setPage(page)} />
        </div>
      </div>
      <ToastContainer />
    </AdminContainer>
  )
}

export default Storys