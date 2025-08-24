import React from "react";

const FooterSignIn = () => {
  return (
    // Signup Link
    <p className="text-center text-sm text-gray-600 mt-6">
      Don’t have an account?{" "}
      <a
        href="/signup"
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Sign Up
      </a>
    </p>
  );
};

export default FooterSignIn;
