/** @typedef {import("@ethersproject/providers").ExternalProvider} external_provider */
export const
      /** @type {() => [external_provider, null] | [null, string]} */
      get_wallet = () =>
         typeof window.ethereum !== "object"
         ? [null, "window.ethereum must be an object!"]
         : window.ethereum === null
            ? [null, "window.ethereum cannot be null!"]
            : [window.ethereum, null]
   ,  get_wallet_address = wallet =>
         wallet.request({method: "eth_requestAccounts"})
            .then(coconuts => coconuts[0])
   ,  eth_to_wei = eth =>
         `0x${(eth * 1e18).toString(16)}`
   ,  set_balance = (address, eth, rpc_provider) =>
         rpc_provider.send("hardhat_setBalance", [address, eth_to_wei(eth)])
