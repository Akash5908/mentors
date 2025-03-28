"use client";

import { usePathname } from "next/navigation";
import { User, MessageSquareMore, Briefcase, Clock } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarMenu } from "@/data/MenuData";
export function AppSidebar() {
  const pathname = usePathname();
  const iconMap: Record<string, React.ElementType> = {
    Clock,
    User,
    MessageSquareMore,
    Briefcase,
  };
  return (
    <Sidebar className="bg-[#F8FAFC]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((item) => {
                const isActive = pathname.startsWith(item.url);
                const IconComponent = iconMap[item.icon];
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-slate-300 text-slate-900"
                            : "hover:bg-slate-200 text-slate-600"
                        }`}
                      >
                        <IconComponent
                          className={isActive ? "text-black" : "text-slate-400"}
                        />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
