// -------------------------------Start: 41_6 ---------------------------------------
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // (3)st
  //    images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 's3.amazonaws.com',
  //       port: '',
  //       pathname: '/my-bucket/**',
  //       search: '',
  //     },
  //   ],
  // },
  // (3)en
  // (4)st "https://res.cloudinary.com/dj493l0jy/image/upload/v1773986441/foods/672baf2f-8c93-4d9f-a255-f097b77fc8dc.png"
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  // (4)en then in layout.js file 
};

export default nextConfig;

// ---------------------End:41_6-(1) to (13) --------------------------------

