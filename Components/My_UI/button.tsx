"use client";

import { useRouter } from "next/router";
import { Button } from "../UI/button";

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
      onClick={() => {
        router.push(link);
      }}
    >
      {children}
    </Button>
  );
}
