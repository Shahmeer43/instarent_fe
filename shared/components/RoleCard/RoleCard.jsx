import Image from "next/image";

const RoleCard = (props) => {
  const { src, title } = props;

  return (
    <div className="flex flex-col gap-4 justify-center items-center flex-grow max-w-[440px] py-4 bg-indigo-200 hover:bg-indigo-300 hover:text-white rounded-lg shadow-xl/30 cursor-pointer">
      <div className="max-w-[160px]">
        <Image src={src} alt="role" />
      </div>
      <div className="text-2xl font-semibold break-all">{title}</div>
    </div>
  );
};
export default RoleCard;
