import { useEffect, useState } from "react";
import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { FaTags } from "react-icons/fa";
import type { storytags } from "../../types/interface";
import axios from "axios";
import { toastError } from "../../utils/toast";
import Loading from "../../components/layouts/admin/Loading";
import Pagination from "../../components/layouts/admin/Pagination"
import { ToastContainer } from "react-toastify";

const StoryTags = () => {
    const [storytag, setStoryTag] = useState<storytags[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [search, setSearch] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const StorysTags = async (pageNum: number = 1) => {
        try {
            setLoading(true)

            const res = await axios.get(`${import.meta.env.VITE_API_URL}/storytags`, {
                params: { page: pageNum, limit: 10, search: search }
            })

            setStoryTag(res.data.data)
            setPage(res.data.page)
            setTotalPage(res.data.total_page)
        } catch (error: any) {
            toastError(error.response?.data?.error || "Failed to fetch data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        StorysTags(page)
    }, [page, search])

    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaTags />StoryTags</h1>
                    <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
                </div>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-[#1f2326]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-normal">ชื่อเรื่อง</th>
                                <th scope="col" className="px-6 py-3 font-normal">แท็ก</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3}>
                                        <Loading />
                                    </td>
                                </tr>
                            ) : storytag.length > 0 ? (
                                storytag.map((items) => (
                                    <tr className="border-b bg-[#1f2326]/40 border-gray-700">
                                        <td className="px-6 py-4 text-white">{items.title}</td>
                                        <td className="px-6 py-4 text-white">{items.tags.map(tag => tag.name).join(", ")}</td>
                                    </tr>
                                ))) : (
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

export default StoryTags