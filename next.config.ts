import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  /* config options here */
};
const withNextIntel = createNextIntlPlugin();
export default withNextIntel(nextConfig);
