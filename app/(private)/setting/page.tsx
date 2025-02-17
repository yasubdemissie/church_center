import { Button_link } from "@/Components/My_UI/link_button";
import { Suspense } from "react";

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>setting</h1>
        <Button_link link="/">Home</Button_link>
      </div>
    </Suspense>
  );
}
