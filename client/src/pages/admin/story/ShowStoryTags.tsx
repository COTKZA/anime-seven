import AdminContainer from "../../../components/layouts/admin/AdminContainer"
import { NavLink, useLocation, useParams } from "react-router"
import { FaTags } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { toastError, toastSuccess } from "../../../utils/toast";
import type { storytagid } from "../../../types/interface";
import Loading from "../../../components/layouts/admin/Loading";
import { ToastContainer } from "react-toastify";
import { MdDelete } from "react-icons/md"

const ShowStoryTags = () => {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState<boolean>(false)
  const [storytags, setStorytags] = useState<storytagid[]>([])

  const location = useLocation()

  useEffect(() => {
    if (location.state?.success) {
      toastSuccess(location.state.success)
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  useEffect(() => {
    const fetchStoryTagsId = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/storytag/${id}`)
        setStorytags(res.data.data.tags || [])
      } catch (error: any) {
        toastError(error.response?.data?.error || "Failed to fetch StoryTags")
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchStoryTagsId()
  }, [id])

  const handleDelete = async (storyTagId: number) => {

    try {
      setLoading(true)
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/storytag/${storyTagId}`)
      toastSuccess(res.data.message)
      setStorytags(prev => prev.filter(item => item.StoryTag.id !== storyTagId))
    } catch (error: any) {
      toastError(error.response?.data?.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminContainer>
      <div className="bg-[#e64a45] rounded-t-sm p-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaTags />StoryTags</h1>
          <NavLink to={`/admin/storys/storytag/add/${id}`}><button className="w-full md:w-auto bg-green-500 px-3 py-2 sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">Add</button></NavLink>
        </div>
      </div>
      <div className="bg-[#2e3338] p-2 rounded-b-sm">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-[#1f2326]">
            <tr>
              <th scope="col" className="px-6 py-3 font-normal">ลำดับ</th>
              <th scope="col" className="px-6 py-3 font-normal">แท็ก</th>
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
            ) : storytags.length > 0 ? (
              storytags.map((items) => (
                <tr className="border-b bg-[#1f2326]/40 border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{items.StoryTag.id}</th>
                  <td className="px-6 py-4 text-white">{items.name}</td>
                  <td><button onClick={() => handleDelete(items.StoryTag.id)} type="submit" className="bg-red-500 hover:bg-red-700 p-2 rounded-md"><MdDelete className="text-lg text-white" /></button></td>
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
      <ToastContainer />
    </AdminContainer>
  )
}

export default ShowStoryTags