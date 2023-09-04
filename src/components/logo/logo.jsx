import logo from "@/assets/Frame.svg";

function Logo() {
  return (
    <div className=" flex justify-start items-center gap-2  ">
    <img src={logo} className="w-8 h-8 relative" />
    <div className="text-black text-lg font-semibold tracking-tight">
      Penseum
    </div>
  </div>
  )
}

export default Logo