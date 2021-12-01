module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/token/',
            destination: "https://cookie-stand-live.herokuapp.com",
          },
        ]
      },
  };