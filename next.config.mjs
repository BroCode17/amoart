/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
import { hostname } from 'os';
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/v1/layout/homepage',
                destination: 'http://localhost:5050'
            }
        ]
    },
    images: {
        
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'assets.vercel.com',
                port: '',
                pathname: '/images/upload/**'
            },
            {
                hostname: 'images.pexels.com'
            }
        ]
    }
};

export default withPlaiceholder(nextConfig);
