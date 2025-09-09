import { NavLink } from "react-router"
import Facebook from "./Facebook"
import Category from "./Category"
import Popular from "./Popular";
import { MdKeyboardArrowRight } from "react-icons/md";

const EpisodeList = () => {
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-8 px-3.5 lg:px-0">
                <div className="shadow-xl/40">
                    <div className="bg-[#e64a45] rounded-t-sm border">
                        <div className="p-2.5">
                            <h3 className="text-white text-2xl mb-3">Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1-9 ซับไทย ยังไม่จบ</h3>
                            <div className="flex items-center text-xs text-white space-x-0.5">
                                <NavLink to={""} className={"flex items-center hover:underline"}>หน้าแรก</NavLink>
                                <MdKeyboardArrowRight className="text-lg" />
                                <NavLink to={""} className={"flex items-center hover:underline"}>ซับไทย</NavLink>
                                <MdKeyboardArrowRight className="text-lg" />
                                <span>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1-9 ซับไทย ยังไม่จบ</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#2e3338] rounded-b-sm p-4 border">
                        <div className="flex items-center justify-center">
                            <div className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden md:w-[390px] p-1">
                                <img src="/images/anime/test.jpg" loading="lazy" className="w-full h-auto sm:w-[140px] sm:h-[196px] md:w-[390px] md:h-[552px]" alt="" />
                            </div>
                        </div>

                        <div className="shadow-xl/40 w-full mt-10">
                            <div className="bg-[#e64a45] rounded-t-sm border">
                                <div className="p-2.5">
                                    <h3 className="text-white text-sm">เรื่องย่อ อนิเมะ Mizu Zokusei no Mahoutsukai จอมเวทวารี</h3>
                                </div>
                            </div>
                            <div className="bg-[#2e3338] rounded-b-sm h-90 p-4 border">
                                <p className="text-[#C8C8C8] text-sm">หลังถูกรถชน เรียว เกิดใหม่ในโลกแฟนตาซี เลือกเรียนรู้ใช้เวทน้ำ ตั้งใจใช้ชีวิตสโลว์ไลฟ์อย่างไรจุดหมาย โดยไม่ทราบถึงความสามารถซ่อนเร้นที่ทำให้เป็นหนุ่มชั่วนิรันดร์ เขาเริ่มชีวิตในป่าที่เต็มไปด้วยมอนสเตอร์อันตราย มีโอกาสได้ฝึกฝนอย่างหนัก เวลาผ่านไปกว่า 20 ปีได้มีโอกาสไปที่เมือง ในช่วงเวลาที่เขากลายเป็นจอมเวทที่แกร่งสุดในเผ่ามนุษย์และเป็นจุดเริ่มต้นการเดินทางของเขา</p>
                            </div>
                        </div>

                        <div className="shadow-xl/40 w-full border border-red-500 bg-[#1f2326] mt-6">
                            <div className="flex flex-col text-white text-sm items-center justify-center p-8">
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                                    <NavLink to={""} className={"hover:underline"}>Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ 1 ซับไทย</NavLink>
                            </div>
                        </div>
       
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Facebook />
                    <Category />
                    <Popular />
                </div>
            </div>
        </>
    )
}

export default EpisodeList