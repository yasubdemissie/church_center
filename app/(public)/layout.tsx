import { AppSidebar } from "@/Components/My_UI/sidebar";
import { SidebarProvider } from "@/Components/UI/sidebar";

export default function Main_Layout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="relative">
      <header className="p-3 w-full bg-slate-400">Header</header>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col items-center justify-center h-screen">
          {children}
        </main>
      </SidebarProvider>
      <div>footer</div>
    </div>
  );
}
