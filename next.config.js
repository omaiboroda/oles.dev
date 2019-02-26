const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
});
const withImages = require('next-images');

module.exports = withImages(
  withMDX(
    withCSS(
      withTypescript({
        target: 'serverless',
        exportPathMap() {
          return {
            '/': { page: '/' }
          };
        }
      })
    )
  )
);
