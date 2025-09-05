import { NavLink } from "react-router";

const Category = () => {
    return (
        <>
            <div className="shadow-xl/40 w-full lg:w-[260px]">
                <div className="bg-[#e64a45] rounded-t-sm border">
                    <div className="flex items-center justify-between p-2.5">
                        <h3 className="text-white text-md">หมวดหมู่</h3>
                    </div>
                </div>
                <div className="bg-[#2e3338] rounded-b-sm  p-4 border">
                    <div className="flex flex-col gap-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            หน้าแรก
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            อนิเมะทั้งหมด
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            ซับไทย
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            พากย์ไทย
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            Movie
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            อนิเมะ Hentai
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            จบแล้ว
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            ยังไม่จบ
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            กำลังมา-(การ์ตูนใหม่)
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            อนิเมะ 18+
                        </NavLink>
                        <NavLink
                            to="/t"
                            className={({ isActive }) =>
                                `text-white text-sm border border-black p-2.5 w-full rounded-sm transition-colors
                                ${isActive
                                    ? "bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                    : "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                }`
                            }
                        >
                            หนัง-ซีรีย์
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
