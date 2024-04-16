import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signInSuccess } from "../redux/user/userSlice";

import { app } from "../firebase";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <div className="flex gap-4 w-full border p-3 pl-28 rounded-lg items-center cursor-pointer hover:opacity-75">
      <img src="/assets/icons/google.svg" alt="hand" width={30} height={30} />
      <button
        onClick={handleGoogleClick}
        type="button"
        className="text-black ml-4 uppercase"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
