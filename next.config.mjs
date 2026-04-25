/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
            {
                source: '/how-to-use.html',
                destination: '/how-to-use',
                permanent: true,
            },
            {
                source: '/technical.html',
                destination: '/technical',
                permanent: true,
            },
            {
                source: '/future.html',
                destination: '/future',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
