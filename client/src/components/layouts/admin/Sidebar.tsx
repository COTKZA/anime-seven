import { NavLink } from "react-router";
import { AiFillDashboard } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { useAuth } from "../../../context/AuthProvider";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  const { logout } = useAuth()
  return (
    <aside className="w-64 bg-[#2e3338] shadow-lg hidden lg:block">
      <div className="p-6 flex flex-col h-full">
        <div>
          <img
            src="/images/logo/logoAS2.png"
            className="w-full h-auto"
            alt="logo"
          />
        </div>
        <nav className="mt-10 flex-1 space-y-2">
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
        </nav>
      </div>

    </aside>
  );
};

export default Sidebar;
