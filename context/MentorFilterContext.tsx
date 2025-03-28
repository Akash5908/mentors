"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Filters = {
  role: string[];
  company: string[];
  slot: string[];
  rating: string[];
};

type FilterContextType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const defaultFilters: Filters = {
  role: [],
  company: [],
  slot: [],
  rating: [],
};

const MentorFilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const MentorFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <MentorFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </MentorFilterContext.Provider>
  );
};

export const useMentorFilter = () => {
  const context = useContext(MentorFilterContext);
  if (!context) throw new Error("useMentorFilter must be used inside Provider");
  return context;
};
