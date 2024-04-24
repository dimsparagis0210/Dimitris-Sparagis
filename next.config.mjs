/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            }
        ]
    }
};

export default nextConfig;
