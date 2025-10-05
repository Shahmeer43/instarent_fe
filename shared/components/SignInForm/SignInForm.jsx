"use client";

import Link from "next/link";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { VscEyeClosed } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

import { Google } from "@/assets/svgs";
import { signInSchema } from "@/schemas";
import Input from "../CustomInput/CustomInput";
import Label from "../CustomLabel/CustomLabel";
import { joiResolver } from "@hookform/resolvers/joi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomButton from "../CustomButton/CustomButton";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton";

const SignInForm = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => setShowPass((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col gap-y-6 p-5 rounded-md"
    >
      <div>
        <p className="text-2xl font-semibold">Welcome Back to InstaRent!</p>
        <p className="text-sm">Sign in your account</p>
      </div>

      <div>
        <div>
          <Label htmlFor="email" text="Email" className="mb-2" />
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            register={register("email")}
            leftIcon={<MdOutlineEmail />}
          />
          <ErrorMessage message={errors?.email?.message} />
        </div>
        <div>
          <Label htmlFor="password" text="Password" className="mb-2" />
          <Input
            id="password"
            placeholder="Your Password"
            leftIcon={<TbLockPassword />}
            register={register("password")}
            type={`${showPass ? "text" : "password"}`}
            rightIcon={
              showPass ? (
                <VscEye onClick={togglePass} />
              ) : (
                <VscEyeClosed onClick={togglePass} />
              )
            }
          />
          <ErrorMessage message={errors?.password?.message} />
        </div>
        <div className="flex justify-between mb-3 text-sm">
          <div className="flex items-center gap-x-2">
            <CustomCheckbox />
            Remember Me
          </div>
          <Link href={""} className="text-gray-400">
            Forgot Password?
          </Link>
        </div>
        <CustomButton
          type="submit"
          content="Sign In"
          className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer"
        />
      </div>

      <div className="flex gap-y-6 flex-col">
        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">Or Sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <GoogleAuthButton
          type="button"
          variant="outline"
          className="cursor-pointer rounded-md hover:bg-gray-200"
          content={
            <div className="flex items-center gap-x-3 text-wrap">
              <Google className="size-6" /> Continue with Google
            </div>
          }
        />
        <p className="text-sm text-center">
          Dont have any account?{" "}
          <span className="text-blue-500 font-medium">Sign Up</span>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
