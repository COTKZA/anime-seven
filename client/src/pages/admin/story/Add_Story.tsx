import AdminContainer from "../../../components/layouts/admin/AdminContainer"
import { NavLink } from "react-router"

const Add_Story = () => {
    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <h1 className="text-white font-extrabold text-xl">เพิ่มเรื่อง</h1>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div>
                    <form >
                        <div className="mb-2">
                            <label htmlFor="title" className="text-white text-md">ชื่อเรื่อง</label>
                            <input type="text"
                                placeholder="ชื่อเรื่อง"
                                className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" />
                        </div>
                        <div className="">
                            <label htmlFor="cover_image" className="text-white text-md">รูป</label>
                            <input type="file"
                                className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" />
                        </div>
                        <div className="">
                            <label htmlFor="description" className="text-white text-md">รายละเอียด</label>
                             <input type="text"
                                placeholder="รายละเอียด"
                                className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg" />
                        </div>
                        <div className="">
                            <label htmlFor="description" className="text-white text-md">รายละเอียด</label>
                            <select name="category_id" id="category_id" className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg">
                                <option value="">ซับไทย</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="description" className="text-white text-md">สถานะ</label>
                            <select name="status" id="status" className="w-full p-2 mt-1 bg-gray-100 border border-gray-100 rounded-lg">
                                <option value="">ซับไทย</option>
                            </select>
                        </div>
                        <div className="flex justify-end items-center mt-5 gap-3">
                            <NavLink to={'/admin/story'}><button className="px-5 py-2 border border-gray-300 hover:bg-gray-500 rounded-xl  text-white">ยกเลิก</button></NavLink>
                            <button type="submit" className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminContainer>
    )
}

export default Add_Story