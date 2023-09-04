import { useState } from "react";
import Loading from "@/components/laoding/Loading";
import Navbar from "@/components/navbar/navbar";
import PremiumNotification from "../components/premiumNotification/premiumNotif";
import { Icon } from "@iconify/react";

import Footer from "../components/footer/footer";

function StartingPage() {
  const [isloading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  return (
    <main className=" w-full h-full flex flex-col items-center justify-center bg-lightGrey overflow-x-hidden">
      {isloading && <Loading />}
      <Navbar premium={false}></Navbar>

      <section className="max-w-7xl w-full px-6 py-6 flex flex-col justify-center items-center gap-6">
        <PremiumNotification />
        <div className="w-full px-8 py-6 bg-white rounded-lg border border-black border-opacity-20 flex-col justify-start items-start gap-6 inline-flex">
          <div className=" justify-start items-start gap-6 inline-flex">
            <div className="text-black text-[32px] font-bold">My Guides</div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="grow shrink basis-0 h-[305px] px-5 py-10 bg-white rounded-2xl border border-black border-opacity-20 flex-col justify-center items-center gap-8 inline-flex">
              <Icon
                icon="streamline:interface-file-clipboard-add-edit-task-edition-add-clipboard-form"
                width={127}
                height={127}
                color="#C5C5C5"
              />

              <div className="text-zinc-600 text-[22px] font-medium">
                Create Study Guide
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default StartingPage;
