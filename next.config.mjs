/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketplace.atlassian.com",
        pathname: "/product-listing/files/**",
      },
      {
        protocol: "https",
        hostname: "clovity-website.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
