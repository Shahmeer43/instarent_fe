import { Input } from "@/components/ui/input";

const CustomInput = (props) => {
  const {
    id,
    type,
    register,
    placeholder,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftIconStyle = "text-[1.2rem]",
    rightIconStyle = "text-[1.2rem]",
  } = props;

  return (
    <div className="relative flex items-center w-full">
      {LeftIcon && (
        <span className={`absolute text-gray-400 left-3 ${leftIconStyle}`}>
          {LeftIcon}
        </span>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...(register ? register : {})}
        className={`${LeftIcon ? "pl-10" : ""} ${RightIcon ? "pr-10" : ""}`}
      />
      {RightIcon && (
        <span className={`absolute text-gray-400 right-3 ${rightIconStyle}`}>
          {RightIcon}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
