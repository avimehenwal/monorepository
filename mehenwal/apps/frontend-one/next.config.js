// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

console.log(`****** NODE_ENV = ${process.env.NODE_ENV}`)
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  basePath: `${(process.env.NODE_ENV === 'production') ? '/monorepository' : ''}`,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  }
};

module.exports = withNx(nextConfig);
