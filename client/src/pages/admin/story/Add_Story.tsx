import AdminContainer from "../../../components/layouts/admin/AdminContainer"
import { NavLink, useNavigate } from "react-router"
import axios from "axios"
import { useEffect, useState, type FormEvent } from "react"
import { toastError } from "../../../utils/toast"
import { ToastContainer } from "react-toastify"
import type { categorys } from "../../../types/interface"
import Loading from "../../../components/layouts/admin/Loading"
import { useAuth } from "../../../context/AuthProvider"

const Add_Story = () => {
    const { user } = useAuth()
    const [category, setCategory] = useState<categorys[]>([])

    const [title, setTitle] = useState<string>("")
    const [coverimage, setCoverImage] = useState<File | null>(null)
    const [previewimage, setPreviewImage] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [categoryid, setCategoryId] = useState<number>()
    const [status, setStatus] = useState<string>("ongoing")

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)

    const SelectCategory = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/select/category`)
            setCategory(res.data.category)
        } catch (error: any) {
            toastError(error.response?.data?.error || "Failed to fetch data")
        } finally {
            setLoading(false)
        }
    }

    const handleStory = async (event: FormEvent) => {
        event.preventDefault()

        if (!user) {
            return toastError("User Not authenticated")
        }

        if (!coverimage) {
            return toastError("Please select a image")
        }

        try {
            setLoading(true)

            const formStory = new FormData()
            formStory.append("title", title)
            formStory.append("coverimage", coverimage)
            formStory.append("description", description)
            formStory.append("categoryid", categoryid?.toString() || "")
            formStory.append("status", status.trim())
            formStory.append("userId", user.id.toString())

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/create/story`, formStory, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            navigate("/admin/storys", { state: { success: res.data.message } })
        } catch (error: any) {
            toastError(error.response?.data?.error || "An error occurred.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        SelectCategory()
    }, [])

    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <h1 className="text-white font-extrabold text-xl">เพิ่มเรื่อง</h1>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div>
                    <form onSubmit={handleStory}>
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <div className="mb-1">
                                <label htmlFor="cover_image" className="text-white text-md">รูป</label>
                                <input type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        const file = event.target.files?.[0] || null
                                        setCoverImage(file)
                                        if (file) setPreviewImage(URL.createObjectURL(file))
                                        else setPreviewImage("")
                                    }}
                                    className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" />
                                {previewimage && (
                                    <div className="flex justify-center items-center mt-4">
                                        <img src={previewimage} alt="Preivew" className="sm:w-[160px] sm:h-[196px] md:w-[200px] md:h-[255px] object-cover rouned-lg border-3 border-gray-500" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label htmlFor="title" className="text-white text-md">ชื่อเรื่อง</label>
                                    <input type="text"
                                        placeholder="ชื่อเรื่อง"
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                        className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="description" className="text-white text-md">รายละเอียด</label>
                                    <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" placeholder="รายละเอียด"></textarea>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="category_id" className="text-white text-md">หมวดหมู่</label>
                                    <select value={categoryid} onChange={(event) => setCategoryId(Number(event.target.value))} className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg">
                                        {loading ? <Loading /> : category.map((items) => (
                                            <option key={items.id} value={items.id}>{items.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="status" className="text-white text-md">สถานะ</label>
                                    <select value={status} name="status" onChange={(event) => setStatus(event.target.value.trim())} className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg">
                                        <option value="ongoing">ยังไม่จบ</option>
                                        <option value="completed">จบแล้ว</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-5 gap-3">
                            <NavLink to={'/admin/storys'}><button className="px-5 py-2 border border-gray-300 hover:bg-gray-500 rounded-xl  text-white">ยกเลิก</button></NavLink>
                            <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white" disabled={loading}>บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </AdminContainer>
    )
}

export default Add_Story