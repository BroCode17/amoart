/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/v1/layout/homepage',
                destination: 'http://localhost:5050'
            }
        ]
    }
};

export default nextConfig;
