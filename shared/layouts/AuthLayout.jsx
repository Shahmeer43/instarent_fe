import Image from "next/image";

import bg from "@/assets/images/instarent_auth_bg.webp";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto">
      <Image fill src={bg} priority alt="background" className="object-cover" />
      <div className="relative z-10 w-[80%] flex justify-center lg:justify-end">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
