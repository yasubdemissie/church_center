"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/Components/UI/button";

interface Button_interface {
  children: React.ReactElement | string;
  link: string;
  variant?: string;
  size?: string;
}

export function Button_link({ children, link }: Button_interface) {
  const router = useRouter();

  return (
    <Button
      variant={"link"}
      className="text-blue-500"
      onClick={() => {
        router.push(link);
      }}
    >
      {children}
    </Button>
  );
}
