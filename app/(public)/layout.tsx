import { AppSidebar } from "@/Components/My_UI/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/UI/sidebar";
import { Book, ContactIcon, HomeIcon, PodcastIcon, SettingsIcon } from "lucide-react";

const sidebarItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    title: "About",
    icon: <Book />,
    href: "/about",
  },
  {
    title: "My post",
    icon: <PodcastIcon />,
    href: "/posts",
  },
  {
    title: "Contact",
    icon: <ContactIcon />,
    href: "/contact",
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    href: "/setting",
  },
];
export default function Main_Layout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="relative">
      <header className="p-3 w-full bg-slate-400">Header</header>
      <SidebarProvider>
        <AppSidebar items={sidebarItems} />
        <main className="p-3">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <div>footer</div>
    </div>
  );
}
