import Vue from 'vue'


//在main.js引入
import Web3 from 'web3'
Vue.prototype.Web3 = Web3
// if (window.ethereum) {
//   window.ethereum.enable().then((res) => {
//     alert("当前钱包地址:" + res[0]);
//   });
// } else {
//   alert("请安装MetaMask钱包");
// }

function web3Test() {
  // https://cloud.tencent.com/developer/article/1152054?from=article.detail.1049813
  //设置web3连接
  var Web3 = require('web3');
  //http://localhost:7545 为Ganache提供的节点链接
  var web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
  //读取合约
  var fs = require('fs');
  var contractCode = fs.readFileSync('Hello.sol').toString();
  //编译合约代码
  var solc = require('solc');
  var compileCode = solc.compile(contractCode);
  //获取合约abi和字节码
  var abi = JSON.parse(compileCode.contracts[':Hello'].interface);
  var byteCode = compileCode.contracts[':Hello'].bytecode;
  //创建合约对象
  var VotingContract = web3.eth.contract(abi);
  //0xbf474d24ba8b19811db5deb51137ddccbe3ff288为合约部署地址
  var contractInstance = VotingContract.at("0x7cC71dA09C61a2706cA378DFa63204612505c194");

  var result = contractInstance.say.call('Hello world');
  console.log(result);
}

function show() {
  console.log("call method show")
}

show()