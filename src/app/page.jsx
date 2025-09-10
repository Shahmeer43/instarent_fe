import Image from "next/image";

import { SignUp } from "../../shared";
import bg from "@/assets/images/instarent_auth_bg.webp";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image fill src={bg} priority alt="background" className="object-cover" />
      <div className="relative z-10">
        <SignUp />
      </div>
    </div>
  );
};

export default HomePage;
