// components/Header.tsx
"use client";

import { usePathname } from "next/navigation";
import { useProfile } from "@/context/ProfileContext";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const { role } = useProfile();
  const pathname = usePathname();
  console.log(role);
  const renderTabs = () => {
    if (pathname.startsWith("/mentor")) {
      return (
        <div className="w-full   flex justify-between px-20">
          <div className="flex items-center">
            <h1 className="text-xl font-light">Mentors</h1>
          </div>
          <div className="flex gap-4">
            {role === "user" || undefined ? (
              <button className="text-black border-[1px] text-[12px] border-slate-300 p-2 bg-[#F8FAFC] rounded-sm cursor-pointer">
                Become a member
              </button>
            ) : (
              <div className="flex items-center gap-2 text-black border-[1px] text-[12px] border-slate-300 p-2 bg-[#F8FAFC] rounded-sm w-fit">
                <span>Switch to mentor</span>
                <Switch
                  id="switch-mode"
                  className="data-[state=checked]:bg-slate-800 data-[state=unchecked]:bg-slate-300 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      );
    }

    if (pathname.startsWith("/job")) {
      return (
        <div>
          <h1 className="text-xl font-bold">Jobs</h1>
          <div className="flex gap-4">
            <button className="text-green-600">Student Tab 1</button>
            <button className="text-green-600">Student Tab 2</button>
          </div>
        </div>
      );
    }

    return null; // fallback or general nav
  };

  return (
    <header className="w-full p-4 mt-5 my-1 bg-[#DBEAFE] shadow-md flex justify-between items-center">
      {renderTabs()}
    </header>
  );
};

export default Header;
