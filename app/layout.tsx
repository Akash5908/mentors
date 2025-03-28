import { AppSidebar } from "@/components/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ProfileProvider } from "@/context/ProfileContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ProfileProvider>
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />

            <main>
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
