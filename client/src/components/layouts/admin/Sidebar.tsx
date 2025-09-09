import { NavLink } from "react-router";
import { AiFillDashboard } from "react-icons/ai";

const Sidebar = () => {
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
                ${
                  isActive
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
            to="/login"
            className={({ isActive }) =>
              `block w-full text-sm p-3 border border-gray-900 rounded-md transition-colors
                ${
                  isActive
                    ? "text-white bg-gradient-to-t from-[#101112] via-[#101112] to-[#191b1d]"
                    : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:from-[#101112] hover:via-[#101112] hover:to-[#191b1d]"
                }`
            }
          >
            <span className="flex items-center gap-1">
              <AiFillDashboard className="text-lg" /> Dashboard
            </span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
