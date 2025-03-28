"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  OctagonAlert,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { toast } from "sonner";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [showedToast, setShowedToast] = useState(false);

  // List of dummy results
  const suggestions = [
    "calendar",
    "emoji",
    "calculator",
    "profile",
    "billing",
    "settings",
  ];

  const hasResults =
    search.trim() === "" ||
    suggestions.some((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  // Show toast when no result is found
  useEffect(() => {
    if (search && !hasResults && !showedToast) {
      toast("No results found.", {
        duration: 5000,
        position: "top-center",
        unstyled: true,
        className:
          "flex w-[50vw] h-[7vh] px-3 items-center border-b-4 text-[15px]  border-red-500 text-black shadow-md  bg-white rounded-sm drop-shadow-lg",
        icon: <OctagonAlert className="text-red-500 pr-1 " />,
      });

      setShowedToast(true);
    } else if (hasResults) {
      setShowedToast(false);
    }
  }, [search, hasResults, showedToast]);

  return (
    <Command className="rounded-lg border-none  bg-[#E2E8F0] shadow-md w-[25vw] ">
      <CommandInput
        placeholder="Search by name"
        value={search}
        onValueChange={setSearch}
        className="bg-[#E2E8F0] border-none"
      />
      {search !== "" && (
        <CommandList className="bg-white ">
          {hasResults ? (
            <>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </>
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      )}
    </Command>
  );
}
