import { NavLink } from "react-router"
import Facebook from "./Facebook"
import Category from "./Category"
import Popular from "./Popular";
import Pagination from "../layouts/user/Pagination";

const Anime = () => {

    const animes = Array.from({ length: 40 }, (_, i) => ({
        id: i + 1,
        title: `Mizu Zokusei no Mahoutsukai จอมเวทวารี ตอนที่ ${i + 1}`,
        image: "/images/anime/test.jpg",
    }));

    return (
        <>
            <div className="flex xl:flex-row flex-col gap-8 px-3.5 lg:px-0">
                <div className="shadow-xl/40">
                    <div className="bg-[#e64a45] rounded-t-sm border">
                        <div className="flex items-center justify-between p-2.5">
                            <h3 className="text-white text-md">อนิเมะอัพเดตล่าสุด</h3>
                            <NavLink to="" className={"bg-[#36393E] text-xs text-white p-0.5 px-2 rounded-sm font-bold"}>รายชื่ออนิเมะทั้งหมด &gt;&gt;</NavLink>
                        </div>
                    </div>
                    <div className="bg-[#2e3338] rounded-b-sm p-4 border">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
                            {animes.map((items) => (
                                <div key={items.id} className="bg-[#1c1e22] border border-[#0c0d0e] rounded-sm overflow-hidden p-1">
                                    <div className="relative">
                                        <div className="relative">
                                            <img src={items.image} loading="lazy" className="sm:w-[140px] md:w-full sm:h-[196px] md:h-[255px]" alt={items.title} />

                                            <span className="absolute top-0 right-0 text-[10px] font-bold text-white bg-[#ee5f5b] border border-white rounded-sm px-2 py-0 shadow-md">
                                                ยังไม่จบ
                                            </span>
                                        </div>
                                        <NavLink to="" className={"absolute bottom-0 left-0 w-full bg-black/60 text-xs px-1 py-1 text-white text-center hover:underline"}>{items.title}</NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-7">
                            <Pagination />
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

export default Anime