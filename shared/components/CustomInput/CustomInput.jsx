import { Input } from "@/components/ui/input";

const CustomInput = (props) => {
  const { id, type, placeholder } = props;
  return <Input id={id} type={type} placeholder={placeholder} />;
};

export default CustomInput;
