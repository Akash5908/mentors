import { Star } from "lucide-react";

export const renderStars = (rating: number) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i < rating ? "#facc15" : "none"} // fill yellow if active
        />
      ))}
    </div>
  );
};
