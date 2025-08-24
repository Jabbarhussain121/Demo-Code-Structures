function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side (Logo) */}
          <div className="flex items-center space-x-3">
            <img
              src="/Images/dr_coders_logo.jfif"
              alt="MyApp Logo"
              className="h-16 w-[100px] rounded-full shadow-lg object-cover"
            />
            <span className="text-white font-bold text-xl tracking-wide">
              
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="px-5 py-2 rounded-lg bg-white text-indigo-600 font-semibold shadow-md hover:bg-indigo-100 hover:text-indigo-800 transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-5 py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
