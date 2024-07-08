/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  /* config options here */
  images: {
    domains: ["maps.googleapis.com"],
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};
