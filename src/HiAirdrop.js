
import AirdropABI from "./ABIAirdrop";
import NFTABI from "./ABINftInfo"
import Web3 from 'web3'

import { Message } from "element-ui";

//  测试链  
// const AIRDROP_ADDRESS = "0xBaD1A1a03B196A756871b050d3e48F4DF5AFe177"    // 空投地址 获取是否可以空投，请求空投
// const NFTINFO_ADDRESS = '0x7cC71dA09C61a2706cA378DFa63204612505c194'    // NFT地址  查询用户有几个NFT，获取NFT地址


// 正式链空投与NFT地址：
const AIRDROP_ADDRESS = "0x9247267ad31413b0958b2681F723b5DAA0E3f190"    // 空投地址 获取是否可以空投，请求空投
const NFTINFO_ADDRESS = '0x59Dfad307338aDc2ADaffFF5a6e6F6e3D0eF0601'    // NFT地址  查询用户有几个NFT，获取NFT地址


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
        this.web3Provider = window.ethereum;
        this.web3 = new Web3(window.ethereum);//web3js就是你需要的web3实例

        var p = this.getMetaMaskAccount0()
        .then(accountAddr => {
            return  this.nftData(accountAddr)
        }).catch(err => {
            console.log(err)
        })
        // .then (url => {
        //     return this.nftDetail(url)
        // }).catch(err=> {
        //     console.log(err)
        // })
        // var p = this.nftDetail('https://www.hibox.tel/web3/data/1004.json')
        return p;
    }


    /**----------------------------------------------   tip   ------------------------------------------
     * constructor 里面可以const self = this
     * 
     * 但是以下的方法，self 要换成this, 不然使用connectMetamask，requestAirdrop等这些函数里面的self.xxx,实际是指向错的
     * **/  
    connectMetamask() {
        var iContract = this;
        return new Promise((resolve, reject) => {
            console.log(" connectMetamask window.ethereum = "+ (typeof window.ethereum ));
            if (typeof window.ethereum !== 'undefined') {
                // window.ethereum.enable() //过期方法
                // https://eips.ethereum.org/EIPS/eip-1193#appendix-ii-examples
                window.ethereum.request({ method: 'eth_requestAccounts' })
                .then((accounts) => {
                    iContract.accountAddr = accounts[0];
                    iContract.web3Provider = window.ethereum;
                    iContract.web3 = new Web3(window.ethereum);//web3js就是你需要的web3实例
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
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            iContract.web3.eth.getAccounts(function (error, result) {
                if (iContract.accountAddr == undefined) {
                    if (error) {
                        console.log("getMetaMaskAccount0 err ", error)//授权成功后result能正常获取到账号了
                        iContract.accountAddr = null
                        reject (error)
                    } else {
                        console.log("getMetaMaskAccount0 111 addr ", result)//授权成功后result能正常获取到账号了
                        iContract.accountAddr = result[0];
                        iContract.accountAddr= result[0];
                        self.accountAddr = result[0];
                        resolve (result[0])
                    }
                } else {
                    console.log("getMetaMaskAccount0 222 addr ", iContract.accountAddr)//授权成功后result能正常获取到账号了
                    resolve (iContract.accountAddr)
                }
            })
        })
        return p
    }

    getAvailableNum(accountAddr) {
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            var hiboxContract = new iContract.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
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
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            if (availableNum >0) {
                var hiboxContract = new iContract.web3.eth.Contract(AirdropABI, AIRDROP_ADDRESS);
                hiboxContract.methods.getAirdrop().send({from: iContract.accountAddr, gas: 200000, gasPrice: iContract.web3.utils.toWei('30','gwei')},function (err, res) {
                    if (err) {
                        console.log("airdropSend err : ", err)
                        iContract.airdropRequestFlag = 2 
                        alert(err.message)
                        reject (err.message)
                    } else {
                        console.log("airdropSend success ", res)
                        iContract.airdropRequestFlag = 10 
                        resolve(res) // data
                    }
                })
            } else {
                reject('No more available NFT for the account.')
            }
        })
        return p
    }

    // 获取账户bnb余额
    balanceOfAccount(accountAddr) {
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            iContract.web3.eth.getBalance(accountAddr).then((result) =>{
                iContract.wei = result
                HiContract.bnb = iContract.web3.utils.fromWei(result,'ether')
                console.log("bnb:" + iContract.web3.utils.fromWei(result, 'ether'))

                resolve(iContract.web3.utils.fromWei(result, 'ether'))
            });
        })
        return p
    }

    // free mint 请求空投
    requestAirdrop() {
        this.airdropRequestFlag = 1

        var p = this.getMetaMaskAccount0()
        .then(accountAddr => {
            return this.getAvailableNum(this.accountAddr)
        }).catch(err => {
            console.log("requestAirdrop catch1", err);
        }).then (availableNum =>{
            console.log(" -> airdropSend " + availableNum);
            return  this.airdropSend(availableNum)
        }).catch( (err) => {
            reject(err)
            console.log("requestAirdrop catch2", err)
        }).then( data =>{
            console.log(" -> nftData ");
            return this.nftData(HiContract.accountAddr)
        }).catch( (err) => {
            console.log("requestAirdrop catch3", err)
        })
        // .then (url => {
        //     this.airdropRequestFlag = 0
        //     return this.nftDetail(url)
        // }).catch(err=> {
        //     this.airdropRequestFlag = 0
        //     console.log(err)
        // })

        return p;
    }

    // 获取账号NFT产品，查询成功后返回NFT url
    nftData(accountAddr) {
        var p = this.nftBalanceOf(accountAddr) 
        .then(count =>{
            return  this.nftTokenOfOwnerByIndex(accountAddr, count-1)
        }).catch(err => {
            console.log("nftData catch1", err);
        }).then(nftToken =>{
            return  this.nftTokenUrl(nftToken);
        }).catch(err => {
            console.log("nftData catch2", err);
        })

        // var p = new Promise((resolve, reject) => {
        //     if (HiContract.airdropRequestFlag < 1) {
        //         reject('request airdop failed')
        //     } else  { 
        //         var nftInfoContract = new HiContract.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
        //         console.log("nftData nftInfoContract", nftInfoContract, accountAddr)
        //         nftInfoContract.methods.tokenOfOwnerByIndex(accountAddr, 1).call(function(err, res) {
        //             console.log("tokenOfOwnerByIndex ", err, res)
        //             nftInfoContract.methods.tokenURI(res).call(function(err2, dataUrl) {
        //                 console.log("nftData ", err2, dataUrl)
        //                 if (err2) {
        //                     reject(err2)
        //                 } else {
        //                     resolve(dataUrl)
        //                 }
        //                 // // TODO 读取url中json，并展示
        //                 // fetch(dataUrl)
        //                 //     .then((response) => response.json())
        //                 //     .then((json) => console.log(json));

        //             });
        //         });
        //     }
        // }).then(count => {

        //     return this.getAvailableNum(this.accountAddr)
        // }).catch( (err) => {
        //     console.log(err)
        // })

        return p
    }

    // NFT合约，获取账户下有几个NFT
    // 返回 NFT数量
    nftBalanceOf (accountAddr) {
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            var nftInfoContract = new iContract.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
            nftInfoContract.methods.balanceOf(accountAddr).call(function(err, count) {
                if (err) {
                    console.log("nftBalanceOf err: ", err)
                    reject(err)
                } else {
                    console.log("nftBalanceOf count: ", count)
                    resolve(count)
                }
            })  
        });
        return p;
    }

     // NFT合约，获取账户下第@index个合约的token信息， index从0开始， 
     // 返回NFT的token
    nftTokenOfOwnerByIndex(accountAddr, index) {
        console.log("nftTokenOfOwnerByIndex ", index);
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            if (index < 0) {
                reject("index err")
            } else {
                var nftInfoContract = new iContract.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
                // 获取账户最新获取到的NF token
                nftInfoContract.methods.tokenOfOwnerByIndex(accountAddr, index).call(function(err, res) {
                    console.log("nftTokenOfOwnerByIndex ", index, err, res)
                    if (err || res == 0) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                })
            }
        });
        return p;
    }

    // NFT合约，根据token获取NFT的URL地址
    nftTokenUrl(nftToken) {
        var iContract = this;
        var p = new Promise((resolve, reject) => {
            if (nftToken == undefined) {
                reject("no token")
            } else {
                var nftInfoContract = new iContract.web3.eth.Contract(NFTABI, NFTINFO_ADDRESS);
                // 获取账户下有几个NFT
                nftInfoContract.methods.tokenURI(nftToken).call(function(err, dataUrl) {
                    console.log("nftTokenUrl ", err, dataUrl)
                    if (err) {
                        reject(err)
                    } else {
                        resolve(dataUrl)
                    }
                })
            }
        });
        return p;
    }

    // 读取url data , nginx 代理访问问题: https://www.yisu.com/zixun/581954.html
    nftDetail(url) {
        return fetch(url)
                .then((response) =>  {
                    console.log("fetch nft ： " , url, response)
                    return response.json()
                })
    }

    dump() {
        console.log("web3.version ", self.web3.version)
        console.log("web3.providers ", self.Web3.providers)
        console.log("account ", self.accountAddr)
    }
}


export default HiContract;