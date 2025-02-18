import { AppSidebar } from "@/Components/My_UI/sidebar";
import { UserAvater } from "@/Components/My_UI/userAvatar";
import { SidebarProvider, SidebarTrigger } from "@/Components/UI/sidebar";
import {
  Book,
  ContactIcon,
  HomeIcon,
  PodcastIcon,
  SettingsIcon,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Home",
    icon: <HomeIcon size={"50px"} />,
    href: "/",
  },
  {
    title: "About",
    icon: <Book size={"50px"} />,
    href: "/about",
  },
  {
    title: "My post",
    icon: <PodcastIcon size={"50px"} />,
    href: "/posts",
  },
  {
    title: "Contact",
    icon: <ContactIcon size={"50px"} />,
    href: "/contact",
  },
  {
    title: "Setting",
    icon: <SettingsIcon size={"50px"} />,
    href: "/setting",
  },
];
export default function MainLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="relative">
      <SidebarProvider>
        <AppSidebar items={sidebarItems} />
        <main className="p-3 w-full">
          <header className="p-3 w-full flex justify-between">
            <SidebarTrigger />
            <UserAvater />
          </header>
          {children}
        </main>
      </SidebarProvider>
      <div>footer</div>
    </div>
  );
}
