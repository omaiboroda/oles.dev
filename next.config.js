const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(
  withCSS(
    withTypescript({
      target: 'serverless',
      webpack: config => {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader'
        });

        return config;
      }
    })
  )
);
