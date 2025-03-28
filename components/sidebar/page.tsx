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

// Menu items.
const items = [
  {
    title: "Mentor",
    url: "/mentor",
    icon: User,
  },
  {
    title: "Job",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Booking",
    url: "#",
    icon: Clock,
  },
  {
    title: "Priority DM",
    url: "#",
    icon: MessageSquareMore,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#F8FAFC]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className=" hover:bg-slate-200">
                      <item.icon className="text-slate-400" />
                      <span className="text-slate-900">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
