const ErrorMessage = (props) => {
  const { message } = props;
  return <p className="text-red-500 text-sm min-h-[1.5rem] mb-1">{message}</p>;
};
export default ErrorMessage;
