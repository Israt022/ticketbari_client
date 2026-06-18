import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 px-6">

      {/* ICON */}
      <div className="mb-4 text-blue-600 dark:text-blue-400">
        <FaMapMarkedAlt size={70} />
      </div>

      {/* 404 TEXT */}
      <h1 className="text-7xl font-bold text-gray-900 dark:text-white">
        404
      </h1>

      {/* MESSAGE */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Oops! This route doesn’t exist in our travel system.
      </p>

      {/* SUB MESSAGE */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Maybe you entered a wrong destination ✈️
      </p>

      {/* BUTTON */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}