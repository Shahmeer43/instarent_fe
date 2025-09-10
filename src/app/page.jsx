import Image from "next/image";

import bg from "@/assets/images/instarent_auth_bg.webp";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image fill src={bg} priority alt="background" className="object-cover" />
      <div className="relative z-10 text-red-500">
        <h1>Welcome to My App</h1>
      </div>
    </div>
  );
};

export default HomePage;
