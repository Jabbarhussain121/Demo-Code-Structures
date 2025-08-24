import React from "react";
import SignUpb from "../SignUpb";

const FormSignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account 🚀
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              className="block text-gray-700 text-sm mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 text-sm mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-700 text-sm mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-700 text-sm mb-1"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-400"
              required
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 hover:underline font-medium">
                Terms and Conditions
              </a>
            </label>
          </div>

          
        </form>

<SignUpb/>
      </div>
    </div>
  );
};

export default FormSignUp;
