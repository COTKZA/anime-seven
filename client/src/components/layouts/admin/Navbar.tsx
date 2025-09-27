import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { useAuth } from "../../../context/AuthProvider";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false)
    const { logout } = useAuth()
    return (
        <nav className="w-full h-12.5 bg-gradient-to-b from-[#484b52] via-[#3F4248] to-[#36393E] shadow-xl/30 block lg:hidden relative">
            <div className="absolute inset-0 left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                <button onClick={() => setOpen(!open)}><GiHamburgerMenu /></button>
            </div>

            <div className="flex justify-center items-center h-full">
                <img src="/images/logo/logoAS2.png" className="w-40 h-10 object-contain" alt="" />
            </div>

            {open && (
                <div className="block lg:hidden">
                    <div className="fixed top-0 w-64 h-screen bg-gradient-to-b from-[#484b52] via-[#3F4248] to-[#36393E] shadow-xl/30 z-50">
                        <div className="p-4 space-y-1">
                            <div className="text-white text-2xl">
                                <button onClick={() => setOpen(!open)}><GiHamburgerMenu /></button>
                            </div>
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                        ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <AiFillDashboard className="text-lg" /> Dashboard
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/accounts"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                         ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <FaUsersCog className="text-lg" /> Accounts
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/categorys"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                     ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <BiSolidCategoryAlt className="text-lg" /> Categorys
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/storys"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                    ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <RiMovie2Fill className="text-lg" /> Storys
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/tags"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                        ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <FaTag className="text-lg" /> Tags
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/storytags"
                                className={({ isActive }) =>
                                    `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                                        ${isActive
                                        ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                                        : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                                    }`
                                }
                            >
                                <span className="flex items-center gap-1">
                                    <FaTags className="text-lg" /> StoryTags
                                </span>
                            </NavLink>

                            <div className="mt-10">
                                <button type="button" className="p-2 w-full bg-red-500 hover:bg-red-600 flex justify-center items-center gap-1 text-white rounded-md group" onClick={logout}><RiLogoutCircleLine className="text-lg group-hover:translate-x-[-5px] transform transition-transform duration-500" /> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar