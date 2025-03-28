import React from "react";
import { dummyUsers } from "@/data/ProfileData";
import { ProfileCard } from "@/components/ProfileCard";
import Header from "@/components/header";

import MentorNavbar from "./components/MentorNavbar";

const Mentor = () => {
  return (
    <div>
      <Header />
      <MentorNavbar />
      <ProfileCard users={dummyUsers} />
    </div>
  );
};

export default Mentor;
