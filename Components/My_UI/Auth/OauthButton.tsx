export function OAuthButton({ children }: { children: React.ReactElement }) {
  return (
    <button
      title="Sign in with Google"
      onClick={() => console.log("clicked")}
      type="submit"
      className="w-full py-1 border border-input rounded-lg flex justify-center bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </button>
  );
}
