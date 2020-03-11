const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    GRAPHQL_URL: 'http://localhost:4000',
  },
});
