import { Button } from "@/components/ui/button";
const CustomButton = (props) => {
  const {
    size,
    type,
    onClick,
    content,
    variant,
    disabled,
    className,
    asChild = false,
  } = props;
  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      onClick={onClick}
      asChild={asChild}
      disabled={disabled}
      className={className}
    >
      {content}
    </Button>
  );
};
export default CustomButton;
