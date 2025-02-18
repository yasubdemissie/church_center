import { signIn } from "@/auth";

export function OAuthButton({
  children,
  type,
}: {
  children: React.ReactElement;
  type: "google" | "github";
}) {
  const option =
    type === "google" ? "Sign in with Google" : "Sign in with Github";
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn(type, { redirectTo: "/home" });
      }}
    >
      <button
        title={option}
        type="submit"
        className="w-full py-1 border border-input rounded-lg flex justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
      >
        {children}
      </button>
    </form>
  );
}
