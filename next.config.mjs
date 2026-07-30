/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/750ml-stainless-steel-sports-bottle-8189",
        destination: "/products/750ml-textured-plastic-tumbler",
        permanent: true,
      },
      {
        source: "/products/straw-lid-gift-set-coffee-cup-7083",
        destination: "/products/hammered-stainless-steel-moscow-mule-mug",
        permanent: true,
      },
      {
        source: "/products/1l-frosted-coffee-cup-5062",
        destination: "/products/1l-borosilicate-glass-carafe",
        permanent: true,
      },
      {
        source: "/products/sports-bottle-7648",
        destination: "/products/custom-plastic-squeeze-sports-bottle",
        permanent: true,
      },
      {
        source: "/products/16oz-frosted-tumbler-8009",
        destination: "/products/16-20oz-frosted-glass-tumbler",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
