import AdminContainer from "../../../components/layouts/admin/AdminContainer"
import { NavLink, useNavigate, useParams } from "react-router"
import { useEffect, useState, type FormEvent } from "react"
import { ToastContainer } from "react-toastify"
import { toastError } from "../../../utils/toast"
import axios from "axios"

const Delete_Categorys = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchIdCategory = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/categorys/${id}`)
        setName(res.data.data.name)
      } catch (error: any) {
        toastError(error.response?.data?.error || "Failed to fetch category")
      }
    }
    if (id) fetchIdCategory()
  }, [id])

  const handleDelete = async (event: FormEvent) => {
    event.preventDefault()

    try {
      setLoading(true)
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/categorys/${id}`)
      navigate('/admin/categorys', { state: { success: res.data.message } })
    } catch (error: any) {
      toastError(error.response?.data?.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminContainer>
      <div className="bg-[#e64a45] rounded-t-sm p-3">
        <h1 className="text-white font-extrabold text-xl">ลบหมวดหมู่</h1>
      </div>
      <div className="bg-[#2e3338] p-2 rounded-b-sm">
        <div>
          <form onSubmit={handleDelete}>
            <div>
              <label htmlFor="name" className="text-white text-md">ชื่อ</label>
              <input type="text"
                placeholder="ชื่อ"
                value={name}
                className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" readOnly />
            </div>
            <div className="flex justify-end items-center mt-5 gap-3">
              <NavLink to={'/admin/categorys'}><button className="px-5 py-2 border border-gray-300 hover:bg-gray-500 rounded-xl text-white">ยกเลิก</button></NavLink>
              <button type="submit" className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-xl text-white" disabled={loading}>ลบ</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </AdminContainer>
  )
}

export default Delete_Categorys