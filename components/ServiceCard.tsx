"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  Video,
  MessageSquareText,
  ShoppingBag,
  Computer,
  IndianRupeeIcon,
} from "lucide-react";
import { Button } from "./ui/button";
// import { Button } from "./ui/button";

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

interface ServiceCardProps {
  service?: ServiceDataItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  if (!service) return null;
  const iconMap: Record<string, React.ElementType> = {
    Clock,
    Video,
    MessageSquareText,
    ShoppingBag,
    Computer,
    IndianRupeeIcon, // your "Rupees" string maps to "Rupee" icon
  };

  return (
    <div className="w-full h-full">
      {/* {service.map((item, index) => ( */}
      <Card
        key={service.title}
        className="border-slate-300 border-[1px] shadow-sm rounded-sm"
      >
        <CardContent className="flex flex-col space-y-4">
          {service.imgUrl && (
            <div className="h-60">
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          )}

          <div className="space-y-5">
            <div className="flex justify-between">
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <Button className="bg-[#334155] text-white cursor-pointer">
                View Details
              </Button>
            </div>
            <CardDescription className="text-[11px]">
              {service.description.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </CardDescription>
          </div>

          <div
            className={`grid gap-2 text-sm  ${
              service.Info.filter((info) => info.value !== "").length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {service.Info.map((info, i) => {
              const IconComponent = iconMap[info.icon];
              if (info.value === "") return null;

              return (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start space-y-2 bg-[#EEF2FF] p-2 rounded"
                >
                  <span className="items-center font-light gap-1 text-[11px] text-slate-500 text-muted-foreground">
                    {info.label}:
                  </span>
                  <span className="flex space-x-1 ">
                    {IconComponent && (
                      <IconComponent size={13} color={"#3B82F6"} />
                    )}
                    <span className="text-[10px]">{info.value}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
