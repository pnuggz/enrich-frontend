const config = {
  enrichApi: {
    baseUrl: "http://localhost:3005/api"
  },

  plaid: {
    clientName: "Feed the Piggy",
    env: "development",
    product: ["transactions"],
    publicKey: "668bf16942e7199f0698533e8f5833",
    countryCodes: ["US", "GB", "ES", "FR", "CAR", "AU"]
  }
};

export default config;
