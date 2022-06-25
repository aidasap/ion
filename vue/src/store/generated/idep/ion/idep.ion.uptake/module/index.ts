// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintNFT } from "./types/uptake/tx";
import { MsgBurnNFT } from "./types/uptake/tx";
import { MsgTransferDenom } from "./types/uptake/tx";
import { MsgEditNFT } from "./types/uptake/tx";
import { MsgIssueDenom } from "./types/uptake/tx";
import { MsgTransferNFT } from "./types/uptake/tx";


const types = [
  ["/idep.ion.uptake.MsgMintNFT", MsgMintNFT],
  ["/idep.ion.uptake.MsgBurnNFT", MsgBurnNFT],
  ["/idep.ion.uptake.MsgTransferDenom", MsgTransferDenom],
  ["/idep.ion.uptake.MsgEditNFT", MsgEditNFT],
  ["/idep.ion.uptake.MsgIssueDenom", MsgIssueDenom],
  ["/idep.ion.uptake.MsgTransferNFT", MsgTransferNFT],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgMintNFT: (data: MsgMintNFT): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgMintNFT", value: MsgMintNFT.fromPartial( data ) }),
    msgBurnNFT: (data: MsgBurnNFT): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgBurnNFT", value: MsgBurnNFT.fromPartial( data ) }),
    msgTransferDenom: (data: MsgTransferDenom): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgTransferDenom", value: MsgTransferDenom.fromPartial( data ) }),
    msgEditNFT: (data: MsgEditNFT): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgEditNFT", value: MsgEditNFT.fromPartial( data ) }),
    msgIssueDenom: (data: MsgIssueDenom): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgIssueDenom", value: MsgIssueDenom.fromPartial( data ) }),
    msgTransferNFT: (data: MsgTransferNFT): EncodeObject => ({ typeUrl: "/idep.ion.uptake.MsgTransferNFT", value: MsgTransferNFT.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
