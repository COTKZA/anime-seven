import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { FaTag } from "react-icons/fa"
import Pagination from "../../components/layouts/admin/Pagination"
import { NavLink, useLocation } from "react-router"
import { ToastContainer } from "react-toastify"
import { toastSuccess, toastError } from "../../utils/toast"
import { useEffect, useState } from "react"
import type { tags } from "../../types/interface"
import axios from "axios"
import Loading from "../../components/layouts/admin/Loading"

const Tags = () => {
    const location = useLocation()

    const [tags, setTags] = useState<tags[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (location.state?.success) {
            toastSuccess(location.state.success)
            window.history.replaceState({}, document.title)
        }
    }, [location.state])

    const Tags = async (pageNum: number = 1) => {
        try {
            setLoading(true)
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/tags`, {
                params: { page: pageNum, limit: 10, search: search },
            })

            setTags(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.total_page)
        } catch (error: any) {
            toastError(error.response?.data?.error || "Failed to fetch data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        Tags(page)
    }, [page, search])

    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaTag />Tags</h1>
                    <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
                    <NavLink to={'/admin/tags/add'}><button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">เพิ่ม</button></NavLink>
                </div>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-[#1f2326]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-normal">ลำดับ</th>
                                <th scope="col" className="px-6 py-3 font-normal">ชื่อ</th>
                                <th scope="col" className="px-6 py-3 font-normal">การดำเนินการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3}>
                                        <Loading />
                                    </td>
                                </tr>
                            ) : tags.length > 0 ? (
                                tags.map((items) => (
                                    <tr key={items.id} className="border-b bg-[#1f2326]/40 border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{items.id}</th>
                                        <td className="px-6 py-4 text-white">{items.name}</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <NavLink to={`/admin/tags/edit/${items.id}`}><button className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-md"><FaEdit className="text-lg text-white" /></button></NavLink>
                                                <NavLink to={`/admin/tags/delete/${items.id}`}><button className="bg-red-500 p-2 hover:bg-red-700 rounded-md"><MdDelete className="text-lg text-white" /></button></NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-white">
                                        <div className="flex items-center justify-center">
                                            <p className="p-4">ไม่มีข้อมูล</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-7">
                    <Pagination currentPage={page} totalPages={totalPage} onPageChange={(page) => setPage(page)} />
                </div>
            </div>
            <ToastContainer />
        </AdminContainer>
    )
}

export default Tags