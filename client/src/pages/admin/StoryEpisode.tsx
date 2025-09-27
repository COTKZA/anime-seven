import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { ImFilm } from "react-icons/im"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { NavLink, useParams } from "react-router"
import { HiMiniSlash } from "react-icons/hi2";
import { useEffect, useState, Fragment } from "react"
import { toastError } from "../../utils/toast"
import axios from "axios"
import type { storyepisode } from "../../types/interface"
import Loading from "../../components/layouts/admin/Loading"
import { ToastContainer } from "react-toastify"

const StoryEpisode = () => {
    const { id } = useParams<{ id: string }>()
    const [loading, setLoading] = useState<boolean>(false)

    const [story, SetStory] = useState<storyepisode[]>([])

    useEffect(() => {
        const fetchIdStory = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/story/${id}`)
                SetStory(Array.isArray(res.data.data) ? res.data.data : [res.data.data])
            } catch (error: any) {
                toastError(error.response?.data?.error || "Failed to fetch Story")
            } finally {
                setLoading(false)
            }
        }
        if (id) fetchIdStory()
    }, [id])

    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-md p-3 mb-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <h1 className="text-white font-extrabold text-2xl flex items-center gap-2">
                        <ImFilm />
                        Episode
                    </h1>
                    <input
                        type="search"
                        className="max-w-md w-full bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                        placeholder="search"
                    />
                    <button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">
                        Add
                    </button>
                </div>
            </div>
            {loading ? (
                <Loading />
            ) : story.map((items, index) => (
                <Fragment key={index}>
                    <div className="bg-[#e64a45] rounded-t-sm border mt-5">
                        <div className="flex items-center justify-between p-2.5">
                            <h3 className="text-xs sm:text-xl text-white flex items-center">
                                <NavLink to={"/admin/storys"} className={"flex items-center hover:underline"}>
                                    Storys <HiMiniSlash />
                                </NavLink>
                                {items.title}
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#2e3338] rounded-b-sm p-2">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex items-center justify-center">
                                <img
                                    src={items.cover_image}
                                    className="w-[255px] h-auto"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>

                            <div className="flex flex-col">
                                <div className="flex flex-col gap-3 max-w-xs w-full">
                                    <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                        <p className="text-white text-md">ตอน</p>
                                        <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                            {items.episodes_count}
                                        </span>
                                    </div>
                                    <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                        <p className="text-white text-md">สถานะ </p>
                                        <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                            {items.status === "ongoing" ? "ยังไม่จบ" : items.status === "completed" ? "จบเเล้ว" : "-"}
                                        </span>
                                    </div>
                                    <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                        <p className="text-white text-md">หมวดหมู่ </p>
                                        <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                            {items.category?.name || "-"}
                                        </span>
                                    </div>
                                    <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                        <p className="text-white text-md">เสียง </p>
                                        <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                            {items.language === "thai_sub" ? "ซับไทย" : items.language === "thai_dub" ? "พากย์ไทย" : "-"}
                                        </span>
                                    </div>
                                    <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                        <p className="text-white text-md">แท็ก </p>
                                        <div className="flex items-center justify-center gap-1">
                                            {items.tags.map((tag, index) => (
                                            <span key={index} className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                                {tag.name}
                                            </span>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-white bg-[#e64a45] px-3 py-1 rounded-t-md font-medium">
                                        เรื่องย่อ
                                    </h2>
                                    <p className="text-sm text-[#C8C8C8] bg-[#1f2326] px-3 py-2 rounded-b-md">
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ))}

            <div className="bg-[#e64a45] rounded-t-sm border mt-5">
                <div className="flex items-center justify-between p-2.5">
                    <h3 className="text-white text-md">ตอนทั้งหมด</h3>

                </div>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">

                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>
                    <div className="bg-[#1f2326] w-full p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div className="mb-3">
                            <h2 className="text-white text-lg">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h2>
                            <p className="text-[#C8C8C8] text-sm">ตอนที่1</p>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-auto">
                            <button className="p-2 bg-yellow-500 w-full hover:bg-yellow-700 rounded-md text-white flex items-center justify-center"><FaEdit /></button>
                            <button className="p-2 bg-red-500 w-full hover:bg-red-700 rounded-md text-white flex items-center justify-center"><MdDelete /></button>
                        </div>
                    </div>

                </div>
                <div className="mt-7">
                </div>
            </div>
            <ToastContainer />
        </AdminContainer>
    );
};

export default StoryEpisode;
