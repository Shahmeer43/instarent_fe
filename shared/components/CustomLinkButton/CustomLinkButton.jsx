import Link from "next/link";

const CustomLinkButton = (props) => {
  const { path, text, style, color = "black", fontColor = "white" } = props;

  return (
    <Link
      href={path}
      style={{ color: fontColor, backgroundColor: color }}
      className={`px-5 py-[4px] rounded-md text-center ${style}`}
    >
      {text}
    </Link>
  );
};

export default CustomLinkButton;
