import FormSignIn from "./FormSignIn";
import Navbar from "./Navbar";
const SignIn = () => {
  return (
    <>
      <Navbar
        logoSrc="/Images/dr_coders_logo.jfif"
        heading="Dr Coders"
        leftLink={{ href: "/signup", label: "Sign Up" }}
        rightLink={{ href: "/login", label: "Login" }}
      />
      {/* Sign In form content here */}
      <FormSignIn/>
    </>
  );
};

export default SignIn;
