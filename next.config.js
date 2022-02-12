module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/repository_name" : "",
  trailingSlash: true,
}
