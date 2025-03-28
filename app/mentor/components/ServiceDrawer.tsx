"use client";

import { ServiceCard } from "@/components/ServiceCard";
//
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabLabels } from "@/data/TabData";
import { CircleAlert } from "lucide-react";
interface InfoItem {
  label: string;
  value: string;
  icon: string;
}

interface ServiceDataItem {
  title: string;
  description: string;
  imgUrl: string;
  Info: InfoItem[];
}

interface User {
  imgUrl: string;
  rating: number;
  name: string;
  profileId: string;
  subHeading: string;
  Bio: string;
  ServiceData?: {
    [key: string]: ServiceDataItem;
  }; // optional since not all users have it
}

interface UserProps {
  user: User;
}

const CallCard = ({ user }: UserProps) => (
  <ServiceCard service={user.ServiceData?.["Call"]} />
);

const PriorityCard = ({ user }: UserProps) => (
  <ServiceCard service={user.ServiceData?.["Priority"]} />
);
const PackageCard = ({ user }: UserProps) => (
  <ServiceCard service={user.ServiceData?.["Package"]} />
);
const WebinarCard = ({ user }: UserProps) => (
  <ServiceCard service={user.ServiceData?.["Webinar"]} />
);
const DigitalCard = ({ user }: UserProps) => (
  <ServiceCard service={user.ServiceData?.["Digital"]} />
);
export function ServiceDrawer({ user }: UserProps) {
  return (
    <Tabs defaultValue="all" className="w-full  break-inside-avoid mb-4">
      {user.ServiceData === undefined ? (
        <div className="flex flex-col justify-center items-center h-[40vh]">
          <CircleAlert color="orange" size={80} />
          <h1 className="text-[#334155] w-[15vw] text-center font-semibold text-[20px] my-[3vh]">
            Temporarily out of service
          </h1>
          <button className="bg-[#334155] text-[12px] text-white p-2 px-3 rounded-lg">
            Find other mentors
          </button>
        </div>
      ) : (
        <TabsList className="grid w-full h-full grid-cols-6 my-4 bg-[#F1F5F9] px-1 py-1 space-x-1 ">
          {TabLabels.map((content, index) => (
            <TabsTrigger
              key={index}
              value={content.value}
              className="hover:bg-white hover:text-slate-800 text-slate-500 font-light shadow-none 
    data-[state=active]:bg-white data-[state=active]:text-slate-800"
            >
              {content.title}
            </TabsTrigger>
          ))}
        </TabsList>
      )}

      <TabsContent
        value="all"
        className="columns-1 md:columns-2 gap-4 space-y-4"
      >
        <CallCard user={user} />
        <PriorityCard user={user} />
        <PackageCard user={user} />
        <WebinarCard user={user} />
        <DigitalCard user={user} />
      </TabsContent>

      <TabsContent value="call" className="space-y-6  grid grid-cols-2 gap-4">
        <CallCard user={user} />
      </TabsContent>

      <TabsContent
        value="priority"
        className="space-y-6  grid grid-cols-2 gap-4"
      >
        <PriorityCard user={user} />
      </TabsContent>
      <TabsContent
        value="package"
        className="space-y-6  grid grid-cols-2 gap-4"
      >
        <PackageCard user={user} />
      </TabsContent>
      <TabsContent
        value="webinar"
        className="space-y-6  grid grid-cols-2 gap-4"
      >
        <WebinarCard user={user} />
      </TabsContent>
      <TabsContent
        value="digital"
        className="space-y-6  grid grid-cols-2 gap-4"
      >
        <DigitalCard user={user} />
      </TabsContent>
    </Tabs>
  );
}
