import { LoginForm } from "./login";
import { SignupForm } from "./singup";
import { Separator } from "./separator";
import { Social } from "./social";

export default async function Form({
  formType,
}: {
  formType: string | string[] | undefined;
}) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-t-8 border-gray-800 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold mb-6 text-center text-gray-500">
        Create New Account
      </h1>
      <Social />
      <Separator />
      {formType === "register" && <SignupForm />}
      {formType === "login" && <LoginForm />}
    </div>
  );
}
