module.exports = {
  exportTrailingSlash: false,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/gallery": { page: "/gallery" },
      "/about-us": { page: "/about-us" },
    };
  },
  target: "serverless",
};
