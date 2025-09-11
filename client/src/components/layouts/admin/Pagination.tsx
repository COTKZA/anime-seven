const Pagination = () => {
    return (
        <nav aria-label="Page navigation" className="w-full">
            <ul className="flex flex-wrap justify-center sm:justify-end items-center text-sm sm:text-base">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] rounded-s-lg"
                    >
                        ก่อนหน้า
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]"
                    >
                        1
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]"
                    >
                        4
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539]"
                    >
                        5
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 sm:px-4 h-9 border border-[#3a3f44] text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] rounded-e-lg"
                    >
                        ถัดไป
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
