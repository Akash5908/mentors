"use client";
import { SearchBar } from "./SearchBar";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { useMentorFilter } from "@/context/MentorFilterContext";
import { X } from "lucide-react";
import { MultiSelect } from "@/components/MultipleSelect";

const selectOptions = [
  {
    placeholder: "Role",
    label: "Roles",
    items: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack",
      "UI/UX Designer",
    ],
  },
  {
    placeholder: "Company",
    label: "Companies",
    items: ["Google", "Microsoft", "Amazon", "StartUpX"],
  },
  {
    placeholder: "Slot",
    label: "Slots",
    items: ["Morning", "Afternoon", "Evening", "Night"],
  },
  {
    placeholder: "Rating",
    label: "Ratings",
    items: ["5 Stars", "4 Stars", "3 Stars", "2 Stars"],
  },
];

const readableValue = (key: string, values: string[]) => {
  const option = selectOptions.find(
    (opt) => opt.placeholder.toLowerCase() === key
  );

  return values.map((val) => {
    const matched = option?.items.find(
      (item) => item.toLowerCase().replace(/\s+/g, "-") === val
    );
    return matched || val;
  });
};

const MentorNavbar = () => {
  const { filters, setFilters } = useMentorFilter();

  const handleMultiSelect = (key: keyof typeof filters, values: string[]) => {
    setFilters({ ...filters, [key]: values });
  };

  return (
    <nav className="p-4">
      <div>
        <div className="flex justify-between space-x-5 items-center px-20">
          <SearchBar />
          <div className="flex gap-6">
            {selectOptions.map((option, index) => {
              const key =
                option.placeholder.toLowerCase() as keyof typeof filters;
              const selected = Array.isArray(filters[key]) ? filters[key] : [];
              return (
                <MultiSelect
                  key={index}
                  title={option.placeholder}
                  items={option.items}
                  selected={selected}
                  onChange={(values) => handleMultiSelect(key, values)}
                />
              );
            })}
          </div>
        </div>

        {/* Selected Filters */}
        <div className="mt-4 flex flex-wrap gap-3 px-20">
          {Object.entries(filters).map(([key, values]) =>
            values.map((val) => (
              <button
                key={`${key}-${val}`} // Unique key includes both key and value
                className="flex items-center gap-2 px-3 py-2 bg-white text-sm rounded-sm shadow-lg border border-slate-200 hover:bg-slate-300 transition"
                onClick={() => {
                  const updatedValues = values.filter((v: string) => v !== val);
                  setFilters({ ...filters, [key]: updatedValues });
                }}
              >
                {readableValue(key, [val])}
                <X size={14} />
              </button>
            ))
          )}
        </div>
      </div>
    </nav>
  );
};

export default MentorNavbar;
