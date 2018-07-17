/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    keoven :  {
      network_id: 3,
      host: '127.0.0.1',
      port: 8545,
      gas: 4000000,
      from: '0x853441be28e537123ee966d915d3771ad8786b2f'
}
  },
   rpc: {
 host: 'localhost',
 post:8080
   }
};
