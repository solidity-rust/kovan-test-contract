const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (deployer) => {
  await deployer.deploy(MetaCoin);
};