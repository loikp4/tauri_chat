// Import
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import * as path from 'path';
import { text } from 'stream/consumers';

const host = "wss://192.168.3.9:9944"
const host2 = "wss://rpc.polkadot.io"
const sibuya = "wss://rpc.shibuya.astar.network"

async function initial() {
    // Construct
    const wsProvider = new WsProvider(sibuya);
    const api = await ApiPromise.create({ provider: wsProvider });
    // Do something
    console.log(api.genesisHash.toHex());
// Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    
}
export default initial;