import Logo from "../logo/logo";


function Loading() {
  return (
    <div className="absolute h-screen w-screen z-20 flex justify-center items-center bg-lightGrey md:hidden">
      <Logo/>
    </div>
  );
}

export default Loading;
