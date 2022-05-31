import {JsonRpcProvider} from "@ethersproject/providers"
import * as core from "./core"

const
      D = document
   ,  input_rpc_provider_url = D.getElementById("rpc_provider_url")
   ,  input_wallet_address = D.getElementById("wallet_address")
   ,  input_eth_amount = D.getElementById("eth_amount")
   ,  buttn_do_it = D.getElementById("do_it")
   ,  [wallet, err] = core.get_wallet()

if
   (err !== null)
      throw new TypeError(err)

void async function()
{ input_wallet_address.value = await core.get_wallet_address(wallet)
}()

buttn_do_it.onclick = () =>
   core.set_balance
      ( input_wallet_address.value
      , Number(input_eth_amount.value)
      , new JsonRpcProvider(input_rpc_provider_url.value)
      )
