import { RiMovie2Fill } from "react-icons/ri";
import { ImFilm } from "react-icons/im";
import { MdCategory } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";

const Cards = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <div className="relative bg-[#282f3c] w-full p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition decoration-3">
                    <div className="absolute left-0 top-0 h-full w-2 bg-red-500 rounded-l-2xl"></div>
                    <div className="text-4xl text-red-500 mb-2"><RiMovie2Fill /></div>
                    <p className="text-white text-lg">6</p>
                    <p className="text-gray-400 text-sm">เรื่อง</p>
                </div>

                <div className="relative bg-[#282f3c] w-full p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition decoration-3">
                    <div className="absolute left-0 top-0 h-full w-2 bg-green-500 rounded-l-2xl"></div>
                    <div className="text-4xl text-green-500 mb-2"><ImFilm /></div>
                    <p className="text-white text-lg">6</p>
                    <p className="text-gray-400 text-sm">ตอน</p>
                </div>

                <div className="relative bg-[#282f3c] w-full p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition decoration-3">
                    <div className="absolute left-0 top-0 h-full w-2 bg-blue-500 rounded-l-2xl"></div>
                    <div className="text-4xl text-blue-500 mb-2"><MdCategory  /></div>
                    <p className="text-white text-lg">6</p>
                    <p className="text-gray-400 text-sm">หมวดหมู่</p>
                </div>

                <div className="relative bg-[#282f3c] w-full p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition decoration-3">
                    <div className="absolute left-0 top-0 h-full w-2 bg-fuchsia-500 rounded-l-2xl"></div>
                    <div className="text-4xl text-fuchsia-500 mb-2"><FaTags /></div>
                    <p className="text-white text-lg">6</p>
                    <p className="text-gray-400 text-sm">แท็ก</p>
                </div>

                <div className="relative bg-[#282f3c] w-full p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition decoration-3">
                    <div className="absolute left-0 top-0 h-full w-2 bg-yellow-500 rounded-l-2xl"></div>
                    <div className="text-4xl text-yellow-500 mb-2"><MdSupervisorAccount /></div>
                    <p className="text-white text-lg">6</p>
                    <p className="text-gray-400 text-sm">ผู้ดูแลระบบ</p>
                </div>
            </div>
        </>
    )
}

export default Cards