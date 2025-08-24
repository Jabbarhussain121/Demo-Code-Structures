import React from "react";

const FooterSignUp = () => {
  return (
    // Already have account
    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account?{" "}
      <a
        href="/signin"
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Sign In
      </a>
    </p>
  );
};

export default FooterSignUp;
