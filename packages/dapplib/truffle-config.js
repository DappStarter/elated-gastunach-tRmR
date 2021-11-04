require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift recipe magic hub install indoor flee spike'; 
let testAccounts = [
"0x7fd670c61e72afe8dcdd086610ef29577afd154edcb83607f8377f57f05d049e",
"0x9c7d08b9a65f82ca082396154df2ab60f0b1d803edc6b561bc4704fd8bce56cc",
"0x4d20e13d2cb532289fdd083882d3ff6b9d786309ba5cd21a5c93725abccd130a",
"0x475e7e2d4b66625e24174398ad34e960af4473cc420025ca0d7a484ca111b889",
"0x994535f816da4ca8bdee664e30512087fabd7ba652542661dc34647fb2cf55d3",
"0x112c93b991304145a925651e31ecc38f9add339766993b276dbf8d36fcb6a1cf",
"0xb5506b0dbd4ea3456bdbaa802060b597c6c584177fef2303c9cfd447277c6a56",
"0xe8f47473a90a12c164eeda3b10c5d50fc3f76fcaf48f86212bfad96a33d0a0a6",
"0xbefaa03467e99146fc10020dff43a7a177b990995add36115abd7e65dab3de04",
"0xfdecc1c141dcfb91d1c3c82047559dbc55a1708ee2c10b34d4eba878893470dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

