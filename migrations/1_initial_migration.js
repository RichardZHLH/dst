const Migrations = artifacts.require("Migrations");
const Dst = artifacts.require("Dst");
const BigNumber = require('bignumber.js')

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Dst, BigNumber("1000000000000000000000"), "Dst1", "Dst1");
};
