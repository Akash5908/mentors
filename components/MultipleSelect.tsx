import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type MultiSelectProps = {
  title: string;
  items: string[];
  selected: string[];
  onChange: (value: string[]) => void;
};

export const MultiSelect = ({
  title,
  items,
  selected,
  onChange,
}: MultiSelectProps) => {
  const toggleItem = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((i) => i !== item));
    } else {
      onChange([...selected, item]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[120px] justify-between bg-white border-slate-300"
        >
          {title}
          <ChevronDown size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-white border-slate-300">
        {items.map((item, index) => {
          const id = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <div key={index} className="flex items-center gap-2 py-1">
              <Checkbox
                id={id}
                checked={selected.includes(id)}
                onCheckedChange={() => toggleItem(id)}
              />
              <label htmlFor={id} className="text-sm">
                {item}
              </label>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};
