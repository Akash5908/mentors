import { MentorFilterProvider } from "@/context/MentorFilterContext";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MentorFilterProvider>
      <Toaster richColors position="top-right" />

      {children}
    </MentorFilterProvider>
  );
}
