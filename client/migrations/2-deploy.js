const Evote = artifacts.require("evote.sol")

module.exports = function(deployer) {
    deployer.deploy(Evote)
}