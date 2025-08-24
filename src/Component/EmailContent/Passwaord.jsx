import React from "react";

function Password() {
  return (
    <div>
      {/* Password */}
      <label
        className="block text-gray-700 text-sm mb-1"
        htmlFor="password"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
        required
      />
    </div>
  );
}

export default Password;
