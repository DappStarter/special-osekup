require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth saddle hole hidden process army gather'; 
let testAccounts = [
"0x9be357bcb8cd7cb4e5f8c80e1837a93a315ef93e62849d585606cdb1c59e868c",
"0x6ef9e9d68ed93e796afdd2c4acb538540ac2daa3a15da6af3f70bcb76daa2412",
"0x4b8dc756b0793c9c6e97d23213418d23cfb92f8c9a8a39ef864e565ae579ffc0",
"0x48d172c9877d727a98924e15af0c6c3ad8cb9e1ceca3ab0a240948be737402aa",
"0x8a57865cf9ce2591753f9db8de754c5b8c52ec51d2a7cc3d884f686e8a8ebc24",
"0x72cc21f5d8a6191fbf8e68a93cee3a7c52b5abc7c13b4a58208fe417f512b91c",
"0x311625131de9f210a277d313f985df6ac97e206f91db807d498a8309cb03a938",
"0x0552616794ef7722d28be28ff14f560affffcaa35fc7b993c125916abccb148b",
"0xcfd4b5d6cd28e483c46002748c84b659b63ebe86d9b361e5cdd84439d9661cd3",
"0x84880624ff32ed6e212d1e594ebc5f66312a8890b6cf450a6c896255142667bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
