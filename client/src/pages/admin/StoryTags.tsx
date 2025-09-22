import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { FaTags } from "react-icons/fa";


const StoryTags = () => {
    return (
        <AdminContainer>
           <div className="bg-[#e64a45] rounded-t-sm p-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaTags />StoryTags</h1>
                    <input type="search" className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
                    <button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">เพิ่ม</button>
                </div>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-[#1f2326]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-normal">ลำดับ</th>
                                <th scope="col" className="px-6 py-3 font-normal">ชื่อเรื่อง</th>
                                <th scope="col" className="px-6 py-3 font-normal">แท็ก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b bg-[#1f2326]/40 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">1</th>
                                <td className="px-6 py-4 text-white">ผมเทพสุดจริง</td>
                                <td className="px-6 py-4 text-white">เเฟนตาซี</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-7">
                    {/* <Pagination /> */}
                </div>
            </div>
        </AdminContainer>
    )
}

export default StoryTags