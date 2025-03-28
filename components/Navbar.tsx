"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";
import { useEffect } from "react";

export const Navbar = () => {
  const { role, setName, setRole } = useProfile();

  useEffect(() => {
    if (role === "") {
      setRole("user");
    }
  }, [role, setRole]);

  const handleProfileChange = (selectedRole: string) => {
    setRole(selectedRole);
    console.log(selectedRole);
    if (selectedRole === "admin") {
      setName("Admin User");
    } else {
      setName("Regular User");
    }
  };

  return (
    <div className="pt-5">
      <div className="w-[80vw] flex justify-end space-x-3">
        <Button className="bg-slate-200 cursor-pointer">
          <Bell color="grey" />
        </Button>

        <Select
          defaultValue={role !== undefined ? role : "user"}
          onValueChange={handleProfileChange}
        >
          <SelectTrigger className="w-[180px] border-slate-300 cursor-pointer">
            <SelectValue placeholder="Select a profile" />
          </SelectTrigger>
          <SelectContent className="border-slate-300">
            <SelectGroup className="bg-white">
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
