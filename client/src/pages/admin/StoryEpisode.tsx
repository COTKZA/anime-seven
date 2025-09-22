import AdminContainer from "../../components/layouts/admin/AdminContainer"
import { ImFilm } from "react-icons/im"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

const StoryEpisode = () => {
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

            <div className="bg-[#e64a45] rounded-t-sm border mt-5">
                <div className="flex items-center justify-between p-2.5">
                    <h3 className="text-xl text-white">Circlet Princess ศึกสาวสังเวียนไซเบอร์</h3>

                </div>
            </div>
            <div className="bg-[#2e3338] rounded-b-sm p-2">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center justify-center">
                        <img
                            src="/images/anime/test.jpg"
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
                                    1-12
                                </span>
                            </div>
                            <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                <p className="text-white text-md">สถานะ </p>
                                <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                    จบแล้ว
                                </span>
                            </div>
                            <div className="bg-[#e64a45] flex items-center justify-between px-2 py-1 rounded-full gap-2">
                                <p className="text-white text-md">หมวดหมู่ </p>
                                <span className="rounded-full text-sm bg-white px-1 text-[#337ab7]">
                                    ซับไทย
                                </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h2 className="text-white bg-[#e64a45] px-3 py-1 rounded-t-md font-medium">
                                เรื่องย่อ
                            </h2>
                            <p className="text-sm text-[#C8C8C8] bg-[#1f2326] px-3 py-2 rounded-b-md">
                                หลังถูกรถชน เรียว เกิดใหม่ในโลกแฟนตาซี เลือกเรียนรู้ใช้เวทน้ำ
                                ตั้งใจใช้ชีวิตสโลว์ไลฟ์อย่างไรจุดหมาย
                                โดยไม่ทราบถึงความสามารถซ่อนเร้นที่ทำให้เป็นหนุ่มชั่วนิรันดร์
                                เขาเริ่มชีวิตในป่าที่เต็มไปด้วยมอนสเตอร์อันตราย
                                มีโอกาสได้ฝึกฝนอย่างหนัก เวลาผ่านไปกว่า 20
                                ปีได้มีโอกาสไปที่เมือง
                                ในช่วงเวลาที่เขากลายเป็นจอมเวทที่แกร่งสุดในเผ่ามนุษย์และเป็นจุดเริ่มต้นการเดินทางของเขา
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#e64a45] rounded-t-sm border mt-5">
                <div className="flex items-center justify-between p-2.5">
                    <h3 className="text-white text-md">อนิเมะอัพเดตล่าสุด</h3>

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
        </AdminContainer>
    );
};

export default StoryEpisode;
