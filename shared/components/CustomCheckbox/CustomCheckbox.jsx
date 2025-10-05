import { Checkbox } from "@/components/ui/checkbox";

const CustomCheckbox = (props) => {
  const {
    value,
    checked,
    disabled,
    required,
    className,
    defaultChecked,
    onCheckedChange,
  } = props;

  return (
    <Checkbox
      value={value}
      checked={checked}
      disabled={disabled}
      required={required}
      className={className}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    />
  );
};
export default CustomCheckbox;
