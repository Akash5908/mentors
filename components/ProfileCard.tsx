/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { renderStars } from "./Rating";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
interface ProfileSchema {
  imgUrl: string;
  rating: number;
  name: string;
  profileId: string;
  subHeading: string;
  Bio: string;
}

interface ProfileCardProps {
  users: ProfileSchema[];
}

export const ProfileCard = ({ users }: ProfileCardProps) => {
  const router = useRouter();
  return (
    <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 px-[100px] gap-4">
      {users.map((user, index) => (
        <Card
          key={index}
          className="border-slate-300"
          onClick={() => router.push(`/mentor/${user.profileId}`)}
        >
          <CardContent className="flex  space-x-10 gap-4">
            <div className="relative h-60">
              <img
                src={user.imgUrl}
                alt={user.name}
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute  w-full bottom-0  bg-black/30 text-white text-sm px-3 py-1 rounded rounded-t-none flex items-center gap-2">
                {renderStars(Math.round(user.rating))}
                <span className="text-xs opacity-80">| 3 reviews</span>
              </div>
            </div>

            <div className="space-y-[8px]  ">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  {user.name}
                  <ShieldCheck color="green" size={"20px"} />
                </CardTitle>
                <Button className="bg-slate-700 text-white cursor-pointer">
                  View Profile
                </Button>
              </div>

              <CardDescription className=" font-normal">
                {user.subHeading}
              </CardDescription>
              <p className="mt-2 w-[40vw] h-[20vh] p-3 text-sm font-light text-muted-foreground bg-[#F1F5F9] rounded-sm">
                {user.Bio}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
