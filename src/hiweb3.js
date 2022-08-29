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


//  https://www.npmjs.com/package/web3-eth-contract
// npm install web3-eth-contract
const Web3EthContract = require('web3-eth-contract');

// Set provider for all later instances to use
Web3EthContract.setProvider('ws://localhost:8546');

const contract = new Web3EthContract(jsonInterface, address);
// contract.methods.
// contract.methods.somFunc().send({from: ....})
// .on('receipt', function(){
//     ...
// });
