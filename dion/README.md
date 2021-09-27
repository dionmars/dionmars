### Install

```shell
# install vyper
virtualenv -p python3 venv
source venv/bin/activate
pip install vyper

cp .env.sample .env
```

### For windows

```
virtualenv -p python3 venv
venv\Scripts\activate
pip install vyper

```
C:\Users\23470\Desktop\uniswap\env\Lib\site-packages\venv\Scripts>activate
### To run

```
venv\Scripts\activate
truffle compile

```

### Test

```shell
source .env

# using infura.io
https://api.mycryptoapi.com/eth
npx ganache-cli \
--fork https://mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID \
--unlock $WETH_WHALE \
--unlock $DAI_WHALE \
--unlock $USDC_WHALE \
--unlock $USDT_WHALE \
--unlock $WBTC_WHALE \
--networkId 999

# using archivenode.io (limit 10 req / sec)
## fork at block
BLOCK=11597142
ARCHIVE_NODE_URL=https://api.archivenode.io/$ARCHIVE_NODE_API_KEY@$BLOCK
## latest block
ARCHIVE_NODE_URL=https://api.archivenode.io/$ARCHIVE_NODE_API_KEY

ganache-cli \
--fork $ARCHIVE_NODE_URL \
--unlock $WETH_WHALE \
--unlock $DAI_WHALE \
--unlock $USDC_WHALE \
--unlock $USDT_WHALE \
--unlock $WBTC_WHALE \
--networkId 999

npx truffle test --network mainnet_fork test/test-erc20.js
npx truffle test --network mainnet_fork test/test-dydx.js

```

PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
npx ganache-cli \
--fork https://mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID \
--unlock $DAI_WHALE \
--networkId 999

npx truffle test --network mainnet_fork test/test-uniswap.js


ppppppppppppppppppppppppppppppppppppppp

npx ganache-cli \
--fork https://mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID \
--unlock $USDC_WHALE \
--networkId 999

npx truffle test --network mainnet_fork test/test-curve-exchange.js








WEB3_INFURA_PROJECT_ID=7b90f2a34ad841a18c0c79a59179125e 
DAI_WHALE=0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8
USDC_WHALE=0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8
USDT_WHALE=0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8
WETH_WHALE=0x28C6c06298d514Db089934071355E5743bf21d60 
WBTC_WHALE=0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8