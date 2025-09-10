import { Label } from "@/components/ui/label";

const CustomLabel = (props) => {
  const { text, htmlFor } = props;
  return <Label htmlFor={htmlFor}>{text}</Label>;
};

export default CustomLabel;
