import React from 'react'

export default function EmailCon() {
  return (

    <div>
            <label className="block text-gray-700 text-sm mb-1" htmlFor="email">
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

  )
}
