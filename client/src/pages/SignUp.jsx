import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const[formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
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
          <img
            src="/logos/logo-dark-outline.svg"
            alt="logo"
            width={170}
            height={50}
            className="absolute left-8 top-4"
          />
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="username"
              className="border p-3 rounded-lg"
              id="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
              <span className="text-blue-700">Sign in</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
