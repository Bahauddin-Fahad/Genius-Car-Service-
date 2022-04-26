import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Reload from "../../Shared/Reload/Reload";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Reload />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="App min-h-[calc(100vh-168px)] flex justify-center ">
        <div className="flex flex-col justify-center items-center gap-y-4 border-2 border-black rounded-lg p-20 max-w-fit m-auto bg-zinc-600 text-white">
          <h2>Didn't Get Email?</h2>
          <h5>Please Verify Your Mail Again.</h5>
          <Button
            className=" bg-white text-black font-semibold border-0 hover:scale-105"
            type="submit"
            onClick={async () => {
              await sendEmailVerification();
              toast.success(`Email Has Been Sent to ${user.email}`, {
                theme: "colored",
              });
            }}
          >
            Verify email
          </Button>
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
