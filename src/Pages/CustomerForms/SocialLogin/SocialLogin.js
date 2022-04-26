import React from "react";
import googleLogo from "../../../images/logo/google.png";
import fbLogo from "../../../images/logo/facebook.png";
import gitHubLogo from "../../../images/logo/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Reload from "../../Shared/Reload/Reload";
const SocialLogin = () => {
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // Google Sign In
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Facebook Sign In
  const [signInWithFacebook /*fbUser*/, , fbLoading, fbError] =
    useSignInWithFacebook(auth);

  // GitHub Sign In
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);

  if (googleLoading || fbLoading || gitHubLoading) {
    return <Reload />;
  }

  if (googleError || fbError || gitHubError) {
    errorElement = (
      <p className=" text-red-600 font-medium">
        Error: {googleError?.message}
        {gitHubError?.message} {fbError?.message}
      </p>
    );
  }

  if (googleUser || gitHubUser) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" bg-slate-300 h-1 w-32"></div>
        <p className="mx-2 mb-0">or</p>
        <div className=" bg-slate-300 h-1 w-32"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="flex items-center justify-between mx-auto font-medium  mt-3 border-2 border-gray-400 rounded-xl w-3/4 px-6 py-1"
        >
          <img className="w-5" src={googleLogo} alt="" />
          Continue With Google
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="flex items-center justify-between mx-auto mt-3 bg-blue-700 rounded-xl text-white font-medium  border-0 w-3/4 px-6 py-1"
        >
          <img className=" w-5" src={fbLogo} alt="" />
          Continue With Facebook
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="flex items-center justify-between mx-auto mt-3 border-0 bg-gray-800 text-white font-medium rounded-xl w-3/4 px-6 py-1"
        >
          <img className="w-5" src={gitHubLogo} alt="" />
          Continue With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
