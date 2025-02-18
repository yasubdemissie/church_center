import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { OAuthButton } from "./OauthButton";

export function Social() {
  return (
    <div className="w-full flex items-center gap-x-2">
      <OAuthButton type="google">
        <FcGoogle size={"26px"} />
      </OAuthButton>

      <OAuthButton type="github">
        <FaGithub size={"26px"} />
      </OAuthButton>
    </div>
  );
}
