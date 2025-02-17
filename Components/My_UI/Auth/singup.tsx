import { Button } from "@/Components/UI/button";
import { InputField } from "./inputField";
import { Button_link } from "../link_button";

export function SignupForm() {
  return (
    <>
      <form className="space-y-4">
        <InputField name="name" placeholder="Abebe Demissie" type="text" />
        <InputField name="email" placeholder="abebe@example.com" type="text" />
        <InputField name="password" placeholder="********" type="password" />
        <Button type="submit" size={"xl"} variant={"default"}>
          Sign Up
        </Button>
      </form>
      <div className="flex justify-center mt-4">
        <Button_link link="?form=login">
          &rarr; already have an account
        </Button_link>
      </div>
    </>
  );
}
