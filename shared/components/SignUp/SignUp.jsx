import Input from "../CustomInput/CustomInput";
import Label from "../CustomLabel/CustomLabel";

const SignUp = () => {
  return (
    <>
      <Label htmlFor="email" text={"Email"} />
      <Input id="email" type="email" placeholder="Email" />
    </>
  );
};

export default SignUp;
