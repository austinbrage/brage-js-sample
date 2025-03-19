module.exports = {
    apps: [
      {
        name: "brage-app",
        script: "server/index.js",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
};
  