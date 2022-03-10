const Migrations = artifacts.require("Migrations");
const Dst = artifacts.require("Dst");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Dst, 1000, "Dst1", "Dst1");
};
