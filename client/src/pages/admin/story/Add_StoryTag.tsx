import { useEffect, useState, type FormEvent } from "react";
import AdminContainer from "../../../components/layouts/admin/AdminContainer";
import { FaTags } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router";
import axios from "axios";
import type { selecttags } from "../../../types/interface";
import { toastError } from "../../../utils/toast";
import { ToastContainer } from "react-toastify"

const Add_StoryTag = () => {
    const { id } = useParams<{ id: string }>()
    const [loading, setLoading] = useState<boolean>(false)
    const [tags, setTags] = useState<selecttags[]>([])
    const [selectTagId, setSelectTagId] = useState<string>("")

    const navigate = useNavigate()

    const SelectTags = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/select/tags`)
            setTags(res.data.tags)
        } catch (error: any) {
            toastError(error.response?.data?.error || "Failed fetch SelectTags")
        } finally {
            setLoading(false)
        }
    }

    const handleStoryTags = async (event: FormEvent) => {
        event.preventDefault()

        if (!id) {
            return toastError("Not Story Id")
        }
        if (!selectTagId) {
            return toastError("Select Tags")
        }

        try {
            setLoading(true)
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/create/storytag`,
                { story_id: id, tag_id: selectTagId })
            navigate(`/admin/storys/storytag/${id}`, { state: { success: res.data.message } })
        } catch (error: any) {
            toastError(error.response?.data?.error || "An error occurred.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        SelectTags()
    }, [])
    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaTags />StoryTags</h1>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <form onSubmit={handleStoryTags}>
                    <div className="mt-2">
                        <label htmlFor="tags" className="text-white text-md">ชื่อแท็ก</label>
                        <select value={selectTagId} onChange={(event) => setSelectTagId(event.target.value)} className="w-full p-2 mt-1 bg-gray-100 border-gray-100 rounded-lg">
                            <option value="">-- เลือกแท็ก --</option>
                            {loading ? <option disabled></option> : tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end items-center mt-5 gap-3">
                        <NavLink to={`/admin/storys/storytag/${id}`}><button className="px-5 py-2 border border-gray-300 hover:bg-gray-500 rounded-xl text-white">ยกเลิก</button></NavLink>
                        <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white" disabled={loading}>บันทึก</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </AdminContainer>
    )
}

export default Add_StoryTag