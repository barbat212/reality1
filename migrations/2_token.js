const Token = artifacts.require("RealityToken");
const SafeMath = artifacts.require("SafeMath");

module.exports = function(deployer, network, accounts) {
	const cells = 100000000000000; // one hundred trillions
	const amount = new web3.BigNumber(web3.toWei(cells, 'ether'));
	const name = "REALITY";
	const symbol = "RLT";
	const granularity = new web3.BigNumber(web3.toWei(1, 'ether'));
	const data = "";

	deployer.then(function() {
		return deployer.deploy(SafeMath);
	}).then(function() {
		return deployer.link(SafeMath, Token);
	}).then(function() {
		return deployer.deploy(Token, name, symbol, granularity);
	}).then(function() {
		return Token.deployed();
	}).then(function(instance) {
		return instance.mint(accounts[0], amount, data);
	});
}