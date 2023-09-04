import { Icon } from "@iconify/react";

function PremiumNotification() {
  return (
    <>
      <div className="hidden md:flex w-full px-6 py-7 bg-violet-100 rounded-lg justify-start items-center gap-6">
        <Icon icon="carbon:time" width={32} height={32} />
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-violet-600 text-[22px] font-medium">
            <span>Try Penseum </span>
            <span className="underline">Premium</span>
            <span> Free for a Week! </span>
          </div>
          <div className="w-[950px] text-zinc-600 text-lg font-medium">
            You can still create up to 2 study guides with a basic account.
          </div>
        </div>
      </div>
      <div className="md:hidden px-6 py-4 bg-violet-100 rounded-lg justify-start items-center gap-3 inline-flex">
      <Icon icon="carbon:time" width={32} height={32} />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-black text-sm font-medium">
            Try Penseum for free for a limited time!
          </div>
          <div className="self-stretch text-zinc-600 text-[10px] font-normal">
            Penseum is currently in Beta. Have access to all our features for a
            limited time only.
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumNotification;
