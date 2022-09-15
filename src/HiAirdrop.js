
import AirdropABI from "./ABIAirdrop";
import NFTABI from "./ABINftInfo"

// const AIRDROP_ADDRESS = "0xBaD1A1a03B196A756871b050d3e48F4DF5AFe177"             // HIBOX BSC test addr               
// const AIRDROP_ADDRESS = "0xC632023c68b68eD37E363dd8bEda48735ab2F330"
const NFTINFO_ADDRESS = '0x7cC71dA09C61a2706cA378DFa63204612505c194'

class HiContract {
    constructor () {
        const self = this;
        self.wei = null;
        self.bnb = null;
        self.hibox = null;
        self.hpy = null;

        self.hiboxNFT = null; 

        self.web3Provider = null;
        self.web3 = null;
        self.accountAddr = null
        self.walletMode = 'metamask'

        self.airdropAvailableNum = 0  // 可以获取的数量

    }

    connectMetamask() {
        if (window.ethereum) {
            window.ethereum.enable().then((res) => {
                console.log("accountAddr = ", self.accountAddr, res[0])
                self.accountAddr = res[0];
            });
        } else {
            alert("Please install metamask");
        }
    }

    // free mint
    requestAirdrop() {
        //引入包
        let Web3 = require('web3');
        if (window.ethereum) {
            self.web3Provider = window.ethereum;
            console.log("web3Provider", window.ethereum)
            try {
                // 请求用户授权
                window.ethereum.enable();
            } catch (error) {
                // 用户不授权时
                alert("User denied account access")
                console.error("ethereum User denied account access")
            }
        } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
            console.log("currentProvider", window.web3.currentProvider)
            self.web3Provider = window.web3.currentProvider;
        } else {
            self.web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
        }

        self.web3 = new Web3(self.web3Provider);//web3js就是你需要的web3实例

        self.web3.eth.getAccounts(function (error, result) {
            console.log("getAccounts res[0] ", error, result[0])//授权成功后result能正常获取到账号了
            if (error) {
                self.accountAddr = null
                self.wei = 0
                self.bnb = 0
            } else {
                self.accountAddr = result[0]
                web3.eth.getBalance(result[0]).then((result) =>{
                    self.wei = result
                    self.bnb = web3.utils.fromWei(result,'ether')
                    console.log("bnb:" + web3.utils.fromWei(result, 'ether'))
                });

                var hiboxContract = new self.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
                console.log("hiboxContract", hiboxContract)
 
                // 查询类，不修改合约使用call方法
                hiboxContract.methods.getAirdropAvailableNum().call({from: self.accountAddr}, function(err, res){
                    console.log('getAirdropAvailableNum ', err, res);
                    // if (res >0) { // 剩余空投次数
                    //     // 发起合约交易，使用send方法
                    //     hiboxContract.methods.getAirdrop().send({from: self.accountAddr,gas: 200000, gasPrice: self.web3.utils.toWei('30','gwei')},function (err, res) {
                    //         if (err) {
                    //             console.log("getAirdrop err : ", err)
                    //         } else {
                    //             console.log("getAirdrop success ", res)
                    //         }
                    //     })
                    // }
                });

                hiboxContract.methods.balanceof(self.accountAddr).call(function(err, res) {
                    console.log("balanceOf ", err, res)
                });
            }
        })
    }

    // 获取账号NFT产品
    nftinfos() {
        //引入包
        let Web3 = require('web3');
        if (window.ethereum) {
            self.web3Provider = window.ethereum;
            console.log("web3Provider", window.ethereum)
            try {
                // 请求用户授权
                window.ethereum.enable();
            } catch (error) {
                // 用户不授权时
                alert("User denied account access")
                console.error("ethereum User denied account access")
            }
        } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
            console.log("currentProvider", window.web3.currentProvider)
            self.web3Provider = window.web3.currentProvider;
        } else {
            self.web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545');
        }

        self.web3 = new Web3(self.web3Provider);//web3js就是你需要的web3实例

        self.web3.eth.getAccounts(function (error, result) {
            console.log("getAccounts res[0] ", error, result[0])//授权成功后result能正常获取到账号了
            if (error) {
                self.accountAddr = null
                self.wei = 0
                self.bnb = 0
            } else {
                self.accountAddr = result[0]

                var nftInfoContract = new self.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
                console.log("nftInfoContract", nftInfoContract)

                nftInfoContract.methods.balanceOf(self.accountAddr).call(function(err, res) {
                    console.log("balanceOf ", err, res)
                });

                nftInfoContract.methods.tokenOfOwnerByIndex(self.accountAddr, 2).call(function(err, res) {
                    console.log("tokenOfOwnerByIndex ", err, res)
                    nftInfoContract.methods.tokenURI( res).call(function(err2, dataUrl) {
                        console.log("tokenURI ", dataUrl)
                        // TODO 读取url中json，并展示
                        fetch(dataUrl)
                            .then((response) => response.json())
                            .then((json) => console.log(json));

                    });
                });
            }
        })
    }

    dump() {
        console.log("web3.version ", self.web3.version)
        console.log("web3.providers ", self.Web3.providers)
        console.log("account ", self.accountAddr)
    }
}


export default HiContract;