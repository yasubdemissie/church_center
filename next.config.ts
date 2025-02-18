import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**", // Matches GitHub avatars
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Matches Google profile images
        pathname: "/**", // Allows all Google profile images
      },
    ],
  },
};

export default withNextVideo(nextConfig);
