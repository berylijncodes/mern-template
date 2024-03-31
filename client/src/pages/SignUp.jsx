import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen">
      <div
        className="h-full w-full md:flex justify-center relative hidden"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: 'url("assets/images/form-image-2.jpg")',
          backgroundBlendMode: "darken",
        }}
      >
        <Link href="/">
          <img src='/logos/logo-dark-outline.svg' alt='logo' width={170} height={50} className="absolute left-8 top-4" />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-full md:justify-start md:p-2.5">
        <div className="max-w-xl w-full p-12 md:backdrop-blur-30 md:bg-opacity-90 sm:p-8 h-full">
          <div className="flex items-center gap-4 w-full">
            <h3 className="md:text-3xl">Create Account</h3>
            <img
              src="/assets/icons/hand.png"
              alt="hand"
              width={30}
              height={30}
            />
          </div>

          <p className="text-gray-500 mb-2">Please enter your details</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="username"
              className="border p-3 rounded-lg"
              id="username"
            />
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg"
              id="email"
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
            />
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Sign up
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
              <span className="text-blue-700">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
