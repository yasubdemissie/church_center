'use client';
import { Button } from "@/Components/UI/button";
import { InputField } from "./inputField";
import { Button_link } from "../link_button";

export function LoginForm() {
  return (
    <>
      <form className="space-y-4">
        <InputField name="email" placeholder="abebe@example.com" type="text" />
        <InputField name="password" placeholder="********" type="password" />
        <Button type="submit" size={"xl"} variant={"default"}>
          Login
        </Button>
      </form>
      <div className="flex justify-center mt-4">
        <Button_link link="?form=register" variant={"link"}>
          &rarr; create a new account
        </Button_link>
      </div>
    </>
  );
}
