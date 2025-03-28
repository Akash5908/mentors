import ReviewCard from "@/components/ReviewCard";
import React from "react";
import { reviews } from "@/data/ReviewData";

const Review = () => {
  return (
    <div>
      <ReviewCard data={reviews} />
    </div>
  );
};

export default Review;
