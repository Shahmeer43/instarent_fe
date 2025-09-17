import { Label } from "@/components/ui/label";

const CustomLabel = (props) => {
  const { text, htmlFor, className } = props;
  return (
    <Label htmlFor={htmlFor} className={className}>
      {text}
    </Label>
  );
};

export default CustomLabel;
