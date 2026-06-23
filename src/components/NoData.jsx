import Link from 'next/link';
import React from 'react';
import { FiInbox } from 'react-icons/fi';

const NoData = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
                
                {/* icon */}
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                    <FiInbox className="w-10 h-10 text-gray-400" />
                </div>

                {/* title */}
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    No tickets found
                </h2>

                {/* description */}
                <p className="text-sm text-gray-500 mt-2 max-w-md">
                    We couldn’t find any tickets matching your filters. Try adjusting your search.
                </p>

                {/* action */}
                <Link
                href="/tickets"
                className="mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                >
                Clear filters
                </Link>

                </div>
    );
};

export default NoData;