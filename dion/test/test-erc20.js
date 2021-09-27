const BN = require("bn.js");
const { DAI, DAI_WHALE };

const IERC20 = artifacts.require("IERC20");

contract("IERC20", (accounts) => {
  const DAI = "0x5ED54cD2247877DaAE6f6ed380fEAbDf279f4d11";
  const DAI_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
  
  const TOKEN = DAI;
  const WHALE = DAI_WHALE;

  let token;
  beforeEach(async () => {
    token = await IERC20.at(TOKEN);
  });

  it("should pass", async () => {
    const bal = await token.balanceOf(WHALE);
    console.log(`bal: ${bal}`);
  });

  it("should transfer", async () => {
    const bal = await token.balanceOf(WHALE);
    await token.transfer(accounts[0], bal, { from: WHALE });
  });
});
