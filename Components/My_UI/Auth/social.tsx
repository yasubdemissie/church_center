"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { OAuthButton } from "./OauthButton";

export function Social() {
  return (
    <div className="w-full flex items-center gap-x-2">
      <OAuthButton>
        <FcGoogle size={"26px"} />
      </OAuthButton>

      <OAuthButton>
        <FaGithub size={"26px"} />
      </OAuthButton>
    </div>
  );
}
