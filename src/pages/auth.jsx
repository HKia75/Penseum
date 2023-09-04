import SignUp from "../components/auth/signUp";
import logo from "@/assets/Frame.svg";
import google from "@/assets/icons_google.svg";

import { useState } from "react";
import Login from "../components/auth/login";

export default function LabTabs() {
  const [value, setValue] = useState(1);

  return (
    <div className="w-full h-screen bg-lightGrey flex justify-center items-center  px-8">
      <div className="max-w-md  px-5 py-6 bg-white rounded-2xl border border-black border-opacity-10 flex-col justify-center items-center gap-8 inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <img src={logo} className="w-8 h-8 relative" />
          <div className="text-black text-lg font-semibold tracking-tight">
            Penseum
          </div>
        </div>
        <div className="text-center text-black text-base font-medium leading-snu">
          Your perfect teacher. Learn anything with ease.
        </div>
        <div className=" w-full flex justify-between items-center ">
          <button
            type="button"
            onClick={()=>setValue(1)}
            className={`${value?" border-bluePurple":"border-grey"} border-b 
            w-1/2 text-center text-black text-base font-medium leading-snug pb-2`}          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={()=>setValue(0)}
            className={`${!value?" border-bluePurple":"border-grey"} border-b 
            w-1/2 text-center text-black text-base font-medium leading-snug pb-2`}
          >
            Log In
          </button>
        </div>

        <div className="self-stretch px-3 py-2.5 bg-white rounded-[100px] border border-black border-opacity-20 justify-center items-center gap-2 inline-flex">
          <img src={google} className="w-8 h-8 relative" />
          <div className="text-black text-sm font-medium leading-tight">
            Log In with Google
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 h-[0px] border border-stone-300"></div>
          <div className="text-black text-sm font-medium leading-tight">or</div>
          <div className="grow shrink basis-0 h-[0px] border border-stone-300"></div>
        </div>
        <div className="w-full">{value ? <SignUp /> : <Login/>}</div>
      </div>
    </div>
  );
}
