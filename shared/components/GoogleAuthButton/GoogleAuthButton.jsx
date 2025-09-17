"use client";
import CustomButton from "../CustomButton/CustomButton";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const GoogleAuthButton = (props) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleAuthInner {...props} />
    </GoogleOAuthProvider>
  );
};

const GoogleAuthInner = (props) => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log("Token:", tokenResponse),
    onError: () => console.log("Login Failed"),
  });

  return <CustomButton {...props} onClick={() => login()} />;
};

export default GoogleAuthButton;
