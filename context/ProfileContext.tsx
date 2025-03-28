"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ProfileContextType {
  name: string;
  role: string;
  setName: (name: string) => void;
  setRole: (role: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <ProfileContext.Provider value={{ name, role, setName, setRole }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
