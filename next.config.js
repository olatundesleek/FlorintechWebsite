// module.exports = {
//   images: {unoptimized:true,
//     protocol: 'http',
//     domains: ['admin.florintechcomputercollege.com', 'florintechcomputercollege.com'],
//   },
// };

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: false,
  }
  // ,
  // output: 'export',
}

module.exports = nextConfig