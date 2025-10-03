import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col w-screen  items-center justify-center h-screen text-center p-6">
      <h3 className="text-8xl font-bold text-blue-600 mb-4">404</h3>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;