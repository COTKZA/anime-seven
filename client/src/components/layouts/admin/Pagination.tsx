interface PaginationProps {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

    // if (totalPages <= 1) return null;

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1)
    }

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1)
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    return (
        <nav aria-label="Page navigation" className="w-full">
            <ul className="flex flex-wrap justify-center sm:justify-end items-center text-sm sm:text-base">
                <li>
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-3 sm:px-4 h-9 border border-[#3a3f44] rounded-l-lg ${currentPage === 1
                            ? "text-gray-500 bg-[#2a2d30] cursor-not-allowed"
                            : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:bg-gray-700"
                            }`}
                    >
                        ก่อนหน้า
                    </button>
                </li>

                {pages.map((page) => (
                    <li>
                        <button
                            className={`px-3 sm:px-4 h-9 border border-[#3a3f44] ${currentPage === page
                                ? "bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:bg-gray-700 text-white"
                                : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:bg-gray-700"
                                }`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                <li>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-3 sm:px-4 h-9 border border-[#3a3f44] rounded-r-lg ${currentPage === totalPages
                                ? "text-gray-500 bg-[#2a2d30] cursor-not-allowed"
                                : "text-white bg-gradient-to-t from-[#484e55] via-[#3a3f44]/40 to-[#313539] hover:bg-gray-700"
                            }`}
                    >
                        ถัดไป
                    </button>
                </li>

            </ul>
        </nav>
    );
};

export default Pagination;
