"use client";

import Link from "next/link";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { VscEyeClosed } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { Google } from "@/assets/svgs";
import { signUpSchema } from "@/schemas";
import Input from "../CustomInput/CustomInput";
import Label from "../CustomLabel/CustomLabel";
import { routesConstants } from "../../constants";
import { joiResolver } from "@hookform/resolvers/joi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CustomButton from "../CustomButton/CustomButton";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton";

const { SIGNIN } = routesConstants;

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => setShowPass((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signUpSchema),
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
        <p className="text-2xl font-semibold">Create your account </p>
        <p className="text-sm">
          Lets create & access exclusive real estate property
        </p>
      </div>
      <div>
        <div>
          <Label htmlFor="username" text="Username" className="mb-2" />
          <Input
            type="text"
            id="username"
            placeholder="Username"
            register={register("username")}
            leftIcon={<HiOutlineUserCircle />}
          />
          <ErrorMessage message={errors?.username?.message} />
        </div>
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
        <p className="text-sm">
          By creating an account, you agree to our{" "}
          <span className="text-blue-500 font-medium">Privacy Policy</span>
        </p>
        <CustomButton
          type="submit"
          content="Sign Up"
          className="w-full bg-blue-500 hover:bg-blue-600 mt-3 cursor-pointer"
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
              <Google className="size-6" /> Sign in with Google
            </div>
          }
        />
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href={SIGNIN} className="text-blue-500 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
