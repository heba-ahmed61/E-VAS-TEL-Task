import React from "react";
const PaginationComponent = ({ totalPages, currentPage, setCurrentPage }) => {
    return (
        <div className="pagintaion">
            <div className="flex mt-4">
                <button
                    type="button"
                    className="px-3 py-2 mr-2 text-gray-500 hover:text-gray-700 rounded-md focus:outline-none disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`px-3 py-2 mx-2 text-gray-500 hover:text-gray-700 rounded-md ${currentPage === i + 1 ? 'bg-gray-200 font-bold' : ''
                            }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    type="button"
                    className="px-3 py-2 ml-2 text-gray-500 hover:text-gray-700 rounded-md focus:outline-none disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
export default PaginationComponent
