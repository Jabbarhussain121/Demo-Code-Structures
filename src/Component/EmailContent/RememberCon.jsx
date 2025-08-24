import React from 'react'

export default function RememberCon() {
  return (


      
      <div className="flex items-center justify-between text-sm">
    <label className="flex items-center text-gray-600">
              <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-400" />
              Remember Me
          </label><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Forgot Password?
              </a>
              
    </div>

  );
}

