import React from "react";

import GoogleSignIn from "../components/Google/GoogleSignInButton";

const Redux = () => {
  return (
    <div className="h-screen flex items-center pt-20 flex-col">
      <GoogleSignIn
        display={
          <span className="google-signin-button">sign in with google</span>
        }
      />
    </div>
  );
};

export default Redux;
