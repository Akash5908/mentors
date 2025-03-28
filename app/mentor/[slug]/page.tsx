import { ProfileCard } from "@/components/ProfileCard2";
import { BackButton } from "@/components/BackButton";
import { dummyUsers } from "@/data/ProfileData";
import { ServiceDrawer } from "../components/ServiceDrawer";
import Review from "../components/Review";
import { Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function Page(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const user = dummyUsers.find((u) => u.profileId === slug);

  return (
    <div className="mt-5">
      <div className="flex justify-between items-start space-x-5  pt-6 border-[1px] border-slate-300 border-x-0">
        <div className="flex justify-start">
          <BackButton />
        </div>
        <div className="flex justify-end">
          {user ? (
            <ProfileCard users={user} />
          ) : (
            <div className="text-red-500">User not found</div>
          )}
        </div>
      </div>

      {user && (
        <div className="w-[80vw] px-[9vw] my-4">
          <h1 className="text-xl font-light text-[#0F172A]">Services</h1>
          <ServiceDrawer user={user} />
        </div>
      )}

      <hr className="text-slate-300" />

      {user && (
        <div className="w-[80vw] px-[9vw] my-4">
          <h1 className="text-xl font-light text-[#0F172A]">Reviews</h1>
          <div className="flex items-center text-[11px] text-slate-500 font-medium space-x-1 my-2">
            <span>3 Reviews | 5.0 </span>
            <Star size={13} fill="gold" color="gold" />
          </div>
          <Review />
        </div>
      )}
    </div>
  );
}
