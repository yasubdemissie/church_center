"use server";

import SignupForm from "@/Components/My_UI/Auth/form";
// import { Add_Button } from "@/Components/My_UI/add_button";
import { Button_link } from "@/Components/My_UI/link_button";
import { readUser } from "@/lib/crud_basic";
export default async function HomeComponent() {
  const user = await readUser();
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <div className="grid m-4 p-2 border-x-2 border-gray-400">
        <p>
          This is a sample project that uses Next.js, Prisma, and Tailwind CSS.
        </p>
      </div>
      <Button_link link="/about">About</Button_link>
    </div>
  );
}
