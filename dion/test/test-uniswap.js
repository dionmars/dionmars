const BN = require("bn.js");
const { sendEther } = require("./util");
const { DAI, WBTC, WBTC_WHALE } = require("");

const IERC20 = artifacts.require("IERC20");
const TestUniswap = artifacts.require("TestUniswap");

contract("TestUniswap", (accounts) => {
  const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f";
  const DAI_WHALE ="0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
  const WBTC = "0x67Ab73483c71856069999cBf2e95eAa78D5490C9";
  
  const WHALE = DAI_WHALE;
  const AMOUNT_IN = new BN(10).pow(new BN)).mul(new BN(1000000)); //1,000,00 DAI
  const AMOUNT_OUT_MIN = 1;
  const TOKEN_IN = DAI;
  const TOKEN_OUT = WBTC;
  const TO = accounts[0];


  it("should swap", async () => {
    const tokenIn = await IERC20.at(TOKEN_IN);
	const tokenOut = await IERC20.at(TOKEN_OUT);
	const testUniswap = await TestUniswap.new();
	
	await tokenIn.approve(testUniswap.address, AMOUNT_IN, {from: WHALE});
	await testUniswap.swap(
	tokenIn.address,
	tokenOut.address,
	AMOUNT_IN,
	AMOUNT_OUT_MIN,
	TO,
	{
	  from: WHALE,
	}
  );
  
  
   );

    console.log(`in ${AMOUNT_IN}`);
    console.log(`out ${await tokenOut.balanceOf(TO)}`);
  });
});
