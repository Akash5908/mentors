/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  //   Linkedin,
  LinkedinIcon,
  InstagramIcon,
  //   TwitchIcon,
  TwitterIcon,
  Share2Icon,
} from "lucide-react";
import { renderStars } from "./Rating";
import { Button } from "./ui/button";

interface ProfileSchema {
  imgUrl: string;
  rating: number;
  name: string;
  profileId: string;
  subHeading: string;
  Bio: string;
}

interface ProfileCardProps {
  users: ProfileSchema;
}

export const ProfileCard = ({ users }: ProfileCardProps) => {
  return (
    <div className="w-[83vw]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-4 ">
      <Card
        key={users.profileId}
        className="border-slate-300 rounded-none border-none shadow-none"
      >
        <CardContent className="flex  space-x-10 gap-4">
          <div className="relative h-60">
            <img
              src={users.imgUrl}
              alt={users.name}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute  w-full bottom-0  bg-black/30 text-white text-sm px-3 py-1 rounded rounded-t-none flex items-center gap-2">
              {renderStars(Math.round(users.rating))}
              <span className="text-xs opacity-80">| 3 reviews</span>
            </div>
          </div>

          <div className="space-y-[10px]  ">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                {users.name}
                <ShieldCheck color="green" size={"20px"} />
              </CardTitle>
              <Button className="bg-[#d8dade] text-[#0F172A] w-[7vw] h-[3.5vh] text-sm">
                20 Sessions
              </Button>
            </div>
            <div className="space-y-[8px]  ">
              <div className="flex items-center justify-between">
                <CardDescription className=" font-normal">
                  {users.subHeading}
                </CardDescription>
                <div className="flex text-[20px]">
                  <LinkedinIcon size={"20px"} />
                  <InstagramIcon size={"20px"} />
                  <TwitterIcon size={"20px"} />
                  <Share2Icon size={"20px"} />
                </div>
              </div>
            </div>
            <p className="mt-2 w-[40vw] h-[20vh] p-3 text-sm font-light text-muted-foreground bg-[#F1F5F9] rounded-sm">
              {users.Bio}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
