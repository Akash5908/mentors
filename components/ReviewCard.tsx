/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star } from "lucide-react";

interface ReviewSchema {
  rating: number;
  feedback: string;
  userImage: string;
  userName: string;
}

interface ReviewProps {
  data: ReviewSchema[];
}

const ReviewCard = ({ data }: ReviewProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 my-[4vh]">
      {data.map((review, index) => (
        <div className="border-[1px] border-slate-300 rounded-md" key={index}>
          <div className="p-5">
            <div className="flex items-center space-x-1">
              <span className="text-[13px]">{review.rating.toFixed(1)}</span>
              <Star size={13} fill="gold" color="gold" />
            </div>

            <p className="my-5 bg-[#e9ebee] p-2 text-[12px] rounded-sm">
              {review.feedback}
            </p>

            <div className="flex items-center space-x-1 text-slate-500">
              <img
                src={review.userImage}
                alt={review.userName}
                className="w-[2vw] h-[3.5vh] rounded-full"
              />
              <span className="text-[10px]">{review.userName}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
