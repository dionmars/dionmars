const BN = require("bn.js");
const { sendEther, pow } = require("./util");
const {DAI, DAI_WHALE, USDC, USDC_WHALE, USDT, USDT_WHALE} = require("");

const IERC20 = artifacts.require("IERC20");
const TestAaveFlashLoan = artifacts.require("TestAaveFlashLoan");

contract("TestAaveFlashLoan", (accounts) => {
  const DAI ="";
  const DAI_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
  const USDC ="0x5ED54cD2247877DaAE6f6ed380fEAbDf279f4d11";
  const USDC_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
  const USDT ="";
  const USDT_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
  
  const WHALE = USDC_WHALE;
  const TOKEN_BORROW = USDC;
  const DECIMALS = 6;
  const FUND_AMOUNT = pow(10, DECIMALS).mul(new BN(2000));
  const BORROW_AMOUNT = pow(10, DECIMALS).mul(new BN(1000));

  let testAaveFlashLoan;
  let token;
  beforeEach(async () => {
    token = await IERC20.at(TOKEN_BORROW);
    testAaveFlashLoan = await TestAaveFlashLoan.new();

    await sendEther(web3, accounts[0], WHALE, 1);

    // send enough token to cover fee
    const bal = await token.balanceOf(WHALE);
    assert(bal.gte(FUND_AMOUNT), "balance < FUND");
    await token.transfer(testAaveFlashLoan.address, FUND_AMOUNT, {
      from: WHALE,
    });
  });

  it("flash loan", async () => {
    const tx = await testAaveFlashLoan.loan(token.address, BORROW_AMOUNT, {
      from: WHALE,
    });
    for (const log of tx.logs) {
      console.log(log.args.message, log.args.val.toString());
    }
  });
});
