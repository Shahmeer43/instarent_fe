import { RoleConfirmationCard } from "../../shared";

const RoleConfirmation = () => {
  const content = (
    <ul className="list-disc list-inside">
      <li>Browse properties</li>
      <li>Send rental requests</li>
      <li>Track rent & payments</li>
    </ul>
  );

  return (
    <div className="flex flex-col gap-7 justify-center items-center min-h-screen bg-indigo-100">
      <div className="flex flex-wrap justify-center gap-6 px-5 w-full">
        <RoleConfirmationCard title="renter" content={content} />
      </div>
    </div>
  );
};

export default RoleConfirmation;
