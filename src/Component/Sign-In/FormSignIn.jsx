import React from "react";
import Loginb from "../Loginb";
import EmailCon from "../EmailContent/EmailCon";
import Password from "../EmailContent/Passwaord";
import RememberCon from "../EmailContent/RememberCon";

const FormSignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-l p-8">
        {/* Title */}
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back Developer 👋
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <EmailCon/>
         <Password/>
        <RememberCon/>
         
        </form>

      <Loginb/>
      </div>
    </div>
  );
};

export default FormSignIn;
