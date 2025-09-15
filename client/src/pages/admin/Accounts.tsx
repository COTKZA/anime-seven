import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import Pagination from "../../components/layouts/admin/Pagination";

const Accounts = () => {
    return (
        <AdminContainer>
            <div className="bg-[#e64a45] rounded-t-sm p-3">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <h1 className="text-white font-extrabold text-2xl flex items-center gap-2"><FaUsersCog />Accounts</h1>
                    <input type="search" className="w-full md:max-w-md bg-white rounded-lg placeholder:text-md placeholder:text-gray-500 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none" placeholder="search" />
                    <button className="w-full md:w-auto bg-green-500 px-3 py-2  sm:px-4 sm:py-2 rounded-md text-white hover:bg-green-600">Add</button>
                </div>
            </div>
            <div className="bg-[#2e3338] p-2 rounded-b-sm">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-[#1f2326]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-normal">Id</th>
                                <th scope="col" className="px-6 py-3 font-normal">UserName</th>
                                <th scope="col" className="px-6 py-3 font-normal">Email</th>
                                <th scope="col" className="px-6 py-3 font-normal">Role</th>
                                <th scope="col" className="px-6 py-3 font-normal">Date/Time</th>
                                <th scope="col" className="px-6 py-3 font-normal">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b bg-[#1f2326]/40 border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">1</th>
                                <td className="px-6 py-4 text-white">jirasak suktakua</td>
                                <td className="px-6 py-4 text-white">jirasak.su@ku.th</td>
                                <td className="px-6 py-4 text-white">Admin</td>
                                <td className="px-6 py-4 text-white">11/04/67</td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-md"><FaEdit className="text-lg text-white" /></button>
                                        <button className="bg-red-500 hover:bg-red-700 p-2 rounded-md"><MdDelete className="text-lg text-white" /></button>
                                    </div>
                                </td>
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

export default Accounts