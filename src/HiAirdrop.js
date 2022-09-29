
import AirdropABI from "./ABIAirdrop";
import NFTABI from "./ABINftInfo"
import Web3 from 'web3'

import { Message } from "element-ui";

const AIRDROP_ADDRESS = "0xBaD1A1a03B196A756871b050d3e48F4DF5AFe177"             // HIBOX BSC test addr               
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

        self.airdropRequestFlag = 0
        self.airdropAvailableNum = 0  // 可以获取的数量
        self.nftUrl = null;

        console.log("constructer web3 status ", window.ethereum)

        // read NFT infos
        // if (window.ethereum) {
        //     this.doinit()
        // }
    }

    doinit() {
        HiContract.web3Provider = window.ethereum;
        HiContract.web3 = new Web3(window.ethereum);//web3js就是你需要的web3实例

        var p = this.getMetaMaskAccount0()
        .then(accountAddr => {
            return  this.nftData(accountAddr)
        }).catch(err => {
            console.log(err)
        }).then (url => {
            return this.nftDetail(url)
        }).catch(err=> {
            console.log(err)
        })
        return p;
    }


    /**----------------------------------------------   tip   --------------------------------------------------------------------
     * constructor 里面可以const self = this
     * 
     * 但是以下的方法，self 要换成this, 不然使用connectMetamask，requestAirdrop等这些函数里面的self.xxx,实际是指向错的
     * **/  
    connectMetamask() {
        return new Promise((resolve, reject) => {
            if (typeof window.ethereum !== 'undefined') {
                // window.ethereum.enable() 过期方法
                // https://eips.ethereum.org/EIPS/eip-1193#appendix-ii-examples
                window.ethereum.request({ method: 'eth_accounts' })
                .then((accounts) => {
                    HiContract.accountAddr = accounts[0];

                    HiContract.web3Provider = window.ethereum;
                    HiContract.web3 = new Web3(window.ethereum);//web3js就是你需要的web3实例
                    console.log("connectMetamask acctount ", accounts[0])
                    resolve(true)
                })
                .catch((reason) => {
                    reject(reason.message)  // debug , should be false
                })
            } else {
                reject('Please install metamask')
            }
        })
    }

    getMetaMaskAccount0() {
        var p = new Promise((resolve, reject) => {
            HiContract.web3.eth.getAccounts(function (error, result) {
                if (HiContract.accountAddr == undefined) {
                    console.log("getMetaMaskAccount0 ", error, result)//授权成功后result能正常获取到账号了
                    if (error) {
                        HiContract.accountAddr = null
                        reject (error)
                    } else {
                        HiContract.accountAddr = result[0]
                        resolve (result[0])
                    }
                } else {
                    resolve (HiContract.accountAddr)
                }
            })
        })
        return p
    }

    getAvailableNum(accountAddr) {
        var p = new Promise((resolve, reject) => {
            var hiboxContract = new HiContract.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
            console.log("hiboxContract - > getAirdropAvailableNum ", hiboxContract)

            // 查询类，不修改合约使用call方法
            hiboxContract.methods.getAirdropAvailableNum().call({from: accountAddr}, function(err, res){
                console.log("hiboxContract - > getAirdropAvailableNum ", err, res)
                if (err || res <= 0) {
                    reject ('No available NFT')
                } else {
                    HiContract.airdropAvailableNum = res
                    resolve(res)
                }
            })
        })
        return p
    }

    airdropSend(availableNum) {
        var p = new Promise((resolve, reject) => {
            if (availableNum >0) {
                // var addr = HiContract.accountAddr
                var hiboxContract = new HiContract.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
                hiboxContract.methods.getAirdrop().send({from: HiContract.accountAddr, gas: 200000, gasPrice: HiContract.web3.utils.toWei('30','gwei')},function (err, res) {
                    if (err) {
                        console.log("airdropSend err : ", err)
                        HiContract.airdropRequestFlag = 2 
                        alert(err.message)
                        reject (err.message)
                    } else {
                        console.log("airdropSend success ", res)
                        HiContract.airdropRequestFlag = 10 
                        resolve(res) // data
                    }
                })
            } else {
                reject('No more available NFT for the account.')
            }
        })
        return p
    }

    // free mint
    requestAirdrop() {
        this.airdropRequestFlag = 1

        var p = this.getMetaMaskAccount0()
        .then(accountAddr => {
            return this.getAvailableNum(this.accountAddr)
        }).catch(err => {
            console.log(err)
        }).then (availableNum =>{
            return  this.airdropSend(availableNum)
        }).catch( (err) => {
            console.log(err)
        }).then( data =>{
            return this.nftData(HiContract.accountAddr)
        }).catch( (err) => {
            console.log(err)
        }).then (url => {
            this.airdropRequestFlag = 0
            return this.nftDetail(url)
        }).catch(err=> {
            this.airdropRequestFlag = 0
            console.log(err)
        })
        // debug UI
        // var p = this.nftDetail('https://www.hibox.tel/web3/data/1004.json')

        return p;
        // // 嵌套一层promise返回到AirDrop页面
        // return new Promise((resolve, reject) => {
        //     console.log("requestAirdrop web3 status ", window.ethereum)

        //     HiContract.web3.eth.getAccounts(function (error, result) {
        //         console.log("getAccounts res[0] ", error, result[0])//授权成功后result能正常获取到账号了
        //         if (error) {
        //             HiContract.accountAddr = null
        //         } else {
        //             this.accountAddr = result[0]
        //             console.log("accounts " , result[0])
        //             HiContract.web3.eth.getBalance(result[0]).then((result) =>{
        //                 self.wei = result
        //                 self.bnb = HiContract.web3.utils.fromWei(result,'ether')
        //                 console.log("bnb:" + HiContract.web3.utils.fromWei(result, 'ether'))
        //             });

        //             var hiboxContract = new HiContract.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
        //             console.log("hiboxContract - > getAirdropAvailableNum ", hiboxContract)
    
        //             // 查询类，不修改合约使用call方法
        //             hiboxContract.methods.getAirdropAvailableNum().call({from: self.accountAddr}, function(err, res){
        //                 console.log('getAirdropAvailableNum ', err, res);
        //                 if (res >0) { // 剩余空投次数
        //                     // 发起合约交易，使用send方法
        //                     hiboxContract.methods.getAirdrop().send({from: result[0],gas: 200000, gasPrice: HiContract.web3.utils.toWei('30','gwei')},function (err, res) {
        //                         if (err) {
        //                             console.log("getAirdrop err : ", err)
        //                         } else {
        //                             console.log("getAirdrop success ", res)
        //                         }
        //                     })
        //                     resolve(res) // data
        //                 } else {
        //                     reject(0)
        //                 }
                        
        //             }).then((result) => {
        //                 reject(-1)
        //                 console.log("then -> res " + res)
        //             })
        //         }
        //     })
        // })
    }

    balanceOfAccount(accountAddr) {
        var p = new Promise((resolve, reject) => {
            HiContract.web3.eth.getBalance(accountAddr).then((result) =>{
                HiContract.wei = result
                HiContract.bnb = HiContract.web3.utils.fromWei(result,'ether')
                console.log("bnb:" + HiContract.web3.utils.fromWei(result, 'ether'))

                resolve(HiContract.web3.utils.fromWei(result, 'ether'))
            });
        })
        return p
    }

    // 获取账号NFT产品
    nftData(accountAddr) {
        var p = new Promise((resolve, reject) => {
            if (HiContract.airdropRequestFlag < 1) {
                reject('request airdop failed')
            } else  {
                var nftInfoContract = new HiContract.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
                console.log("nftData nftInfoContract", nftInfoContract, accountAddr)
                
                nftInfoContract.methods.tokenOfOwnerByIndex(accountAddr, 1).call(function(err, res) {
                    console.log("tokenOfOwnerByIndex ", err, res)
                    nftInfoContract.methods.tokenURI(res).call(function(err2, dataUrl) {
                        console.log("nftData ", err2, dataUrl)
                        if (err2) {
                            reject(err2)
                        } else {
                            resolve(dataUrl)
                        }
                        // // TODO 读取url中json，并展示
                        // fetch(dataUrl)
                        //     .then((response) => response.json())
                        //     .then((json) => console.log(json));

                    });
                });
            }
        })
        return p
    }

    // 读取url data , nginx 代理访问问题: https://www.yisu.com/zixun/581954.html
    nftDetail(url) {
        var p = new Promise((resolve, reject) => {
            console.log('nftDetail : ', url)
            if (url == undefined) {
                reject('get NFT info failed')
            } else {
                fetch(url)
                .then((response) =>  {
                    console.log(response)
                    resolve(response)
                }).catch((err)=>{
                    reject(err)
                })
            }
        })
        return p
    }

    dump() {
        console.log("web3.version ", self.web3.version)
        console.log("web3.providers ", self.Web3.providers)
        console.log("account ", self.accountAddr)
    }
}


export default HiContract;