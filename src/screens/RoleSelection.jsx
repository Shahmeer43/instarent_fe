import { RoleCard } from "../../shared";

import renterImg from "@/assets/images/renter.webp";
import landlordImg from "@/assets/images/landlord.webp";

const RoleSelection = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen bg-indigo-100">
      <div className="max-[200px]:text-xl max-[300px]:text-2xl text-3xl font-semibold text-center">
        Select Your Role
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-5 w-full">
        <RoleCard title="Landlord" src={landlordImg} />
        <RoleCard title="Renter" src={renterImg} />
      </div>
    </div>
  );
};

export default RoleSelection;
