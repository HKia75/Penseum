import { useState } from "react";
import SignUp from "../components/auth/signUp";
import Login from "../components/auth/login";
import Logo from "../components/logo/logo";
import { Icon } from "@iconify/react";

export default function LabTabs() {
  const [value, setValue] = useState(1);

  return (
    <div className="w-full h-screen bg-lightGrey flex justify-center items-center  px-8">
      <div className="max-w-md  px-5 py-6 bg-white rounded-2xl border border-black border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
        <Logo />
        <div className="text-center text-black text-base font-medium leading-snu">
          Your perfect teacher. Learn anything with ease.
        </div>
        <div className=" w-full flex justify-between items-center ">
          <button
            type="button"
            onClick={() => setValue(1)}
            className={`${
              value ? " border-bluePurple" : "border-grey"
            } border-b 
            w-1/2 text-center text-black text-base font-medium leading-snug pb-2`}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setValue(0)}
            className={`${
              !value ? " border-bluePurple" : "border-grey"
            } border-b 
            w-1/2 text-center text-black text-base font-medium leading-snug pb-2`}
          >
            Log In
          </button>
        </div>

        <button
          type="button"
          className="self-stretch px-3 py-2.5 bg-white rounded-[100px] border border-black border-opacity-20 justify-center items-center gap-2 inline-flex"
        >
          <Icon icon="flat-color-icons:google" width="24" height="24" />
          <div className="text-black text-sm font-medium leading-tight">
            Log In with Google
          </div>
        </button>
        <div className="self-stretch justify-center items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 h-[0px] border border-stone-300"></div>
          <div className="text-black text-sm font-medium leading-tight">or</div>
          <div className="grow shrink basis-0 h-[0px] border border-stone-300"></div>
        </div>
        <div className="w-full">{value ? <SignUp /> : <Login />}</div>
      </div>
    </div>
  );
}
