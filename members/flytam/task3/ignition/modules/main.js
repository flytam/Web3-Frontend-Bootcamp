const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  const ONE_GWEI = 1_000_000_000n;
  const token = m.contract("ByteDanceToken", [ONE_GWEI * 100000000000000000000n]);
  const nft = m.contract("BytedanceNFT");
  const market = m.contract("NFTMarket", [token]);

  return { token, market, nft };
});
