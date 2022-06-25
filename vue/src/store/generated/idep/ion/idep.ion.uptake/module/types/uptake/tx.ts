/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "idep.ion.uptake";

/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
  id: string;
  name: string;
  schema: string;
  sender: string;
  symbol: string;
  mint_restricted: boolean;
  update_restricted: boolean;
}

/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponse {}

/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFT {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}

/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponse {}

/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFT {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
}

/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponse {}

/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
  id: string;
  denom_id: string;
  name: string;
  uri: string;
  data: string;
  sender: string;
  recipient: string;
}

/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {}

/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
  id: string;
  denom_id: string;
  sender: string;
}

/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {}

/** MsgTransferDenom defines an SDK message for transferring an denom to recipient. */
export interface MsgTransferDenom {
  id: string;
  sender: string;
  recipient: string;
}

/** MsgTransferDenomResponse defines the Msg/TransferDenom response type. */
export interface MsgTransferDenomResponse {}

const baseMsgIssueDenom: object = {
  id: "",
  name: "",
  schema: "",
  sender: "",
  symbol: "",
  mint_restricted: false,
  update_restricted: false,
};

export const MsgIssueDenom = {
  encode(message: MsgIssueDenom, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.mint_restricted === true) {
      writer.uint32(48).bool(message.mint_restricted);
    }
    if (message.update_restricted === true) {
      writer.uint32(56).bool(message.update_restricted);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueDenom } as MsgIssueDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.mint_restricted = reader.bool();
          break;
        case 7:
          message.update_restricted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueDenom {
    const message = { ...baseMsgIssueDenom } as MsgIssueDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = String(object.schema);
    } else {
      message.schema = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (
      object.mint_restricted !== undefined &&
      object.mint_restricted !== null
    ) {
      message.mint_restricted = Boolean(object.mint_restricted);
    } else {
      message.mint_restricted = false;
    }
    if (
      object.update_restricted !== undefined &&
      object.update_restricted !== null
    ) {
      message.update_restricted = Boolean(object.update_restricted);
    } else {
      message.update_restricted = false;
    }
    return message;
  },

  toJSON(message: MsgIssueDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.schema !== undefined && (obj.schema = message.schema);
    message.sender !== undefined && (obj.sender = message.sender);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.mint_restricted !== undefined &&
      (obj.mint_restricted = message.mint_restricted);
    message.update_restricted !== undefined &&
      (obj.update_restricted = message.update_restricted);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueDenom>): MsgIssueDenom {
    const message = { ...baseMsgIssueDenom } as MsgIssueDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    } else {
      message.schema = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (
      object.mint_restricted !== undefined &&
      object.mint_restricted !== null
    ) {
      message.mint_restricted = object.mint_restricted;
    } else {
      message.mint_restricted = false;
    }
    if (
      object.update_restricted !== undefined &&
      object.update_restricted !== null
    ) {
      message.update_restricted = object.update_restricted;
    } else {
      message.update_restricted = false;
    }
    return message;
  },
};

const baseMsgIssueDenomResponse: object = {};

export const MsgIssueDenomResponse = {
  encode(_: MsgIssueDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueDenomResponse } as MsgIssueDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgIssueDenomResponse {
    const message = { ...baseMsgIssueDenomResponse } as MsgIssueDenomResponse;
    return message;
  },

  toJSON(_: MsgIssueDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgIssueDenomResponse>): MsgIssueDenomResponse {
    const message = { ...baseMsgIssueDenomResponse } as MsgIssueDenomResponse;
    return message;
  },
};

const baseMsgTransferNFT: object = {
  id: "",
  denom_id: "",
  name: "",
  uri: "",
  data: "",
  sender: "",
  recipient: "",
};

export const MsgTransferNFT = {
  encode(message: MsgTransferNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denom_id !== "") {
      writer.uint32(18).string(message.denom_id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denom_id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferNFT>): MsgTransferNFT {
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseMsgTransferNFTResponse: object = {};

export const MsgTransferNFTResponse = {
  encode(_: MsgTransferNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNFTResponse {
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferNFTResponse>): MsgTransferNFTResponse {
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },
};

const baseMsgEditNFT: object = {
  id: "",
  denom_id: "",
  name: "",
  uri: "",
  data: "",
  sender: "",
};

export const MsgEditNFT = {
  encode(message: MsgEditNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denom_id !== "") {
      writer.uint32(18).string(message.denom_id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditNFT } as MsgEditNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denom_id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditNFT {
    const message = { ...baseMsgEditNFT } as MsgEditNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgEditNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditNFT>): MsgEditNFT {
    const message = { ...baseMsgEditNFT } as MsgEditNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgEditNFTResponse: object = {};

export const MsgEditNFTResponse = {
  encode(_: MsgEditNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditNFTResponse } as MsgEditNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditNFTResponse {
    const message = { ...baseMsgEditNFTResponse } as MsgEditNFTResponse;
    return message;
  },

  toJSON(_: MsgEditNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgEditNFTResponse>): MsgEditNFTResponse {
    const message = { ...baseMsgEditNFTResponse } as MsgEditNFTResponse;
    return message;
  },
};

const baseMsgMintNFT: object = {
  id: "",
  denom_id: "",
  name: "",
  uri: "",
  data: "",
  sender: "",
  recipient: "",
};

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denom_id !== "") {
      writer.uint32(18).string(message.denom_id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denom_id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.sender = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.data !== undefined && (obj.data = message.data);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseMsgMintNFTResponse: object = {};

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    return message;
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    return message;
  },
};

const baseMsgBurnNFT: object = { id: "", denom_id: "", sender: "" };

export const MsgBurnNFT = {
  encode(message: MsgBurnNFT, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denom_id !== "") {
      writer.uint32(18).string(message.denom_id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denom_id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    return message;
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnNFT>): MsgBurnNFT {
    const message = { ...baseMsgBurnNFT } as MsgBurnNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    return message;
  },
};

const baseMsgBurnNFTResponse: object = {};

export const MsgBurnNFTResponse = {
  encode(_: MsgBurnNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    return message;
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnNFTResponse>): MsgBurnNFTResponse {
    const message = { ...baseMsgBurnNFTResponse } as MsgBurnNFTResponse;
    return message;
  },
};

const baseMsgTransferDenom: object = { id: "", sender: "", recipient: "" };

export const MsgTransferDenom = {
  encode(message: MsgTransferDenom, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferDenom } as MsgTransferDenom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferDenom {
    const message = { ...baseMsgTransferDenom } as MsgTransferDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgTransferDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferDenom>): MsgTransferDenom {
    const message = { ...baseMsgTransferDenom } as MsgTransferDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseMsgTransferDenomResponse: object = {};

export const MsgTransferDenomResponse = {
  encode(
    _: MsgTransferDenomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTransferDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferDenomResponse,
    } as MsgTransferDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferDenomResponse {
    const message = {
      ...baseMsgTransferDenomResponse,
    } as MsgTransferDenomResponse;
    return message;
  },

  toJSON(_: MsgTransferDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTransferDenomResponse>
  ): MsgTransferDenomResponse {
    const message = {
      ...baseMsgTransferDenomResponse,
    } as MsgTransferDenomResponse;
    return message;
  },
};

/** Msg defines the nft Msg service. */
export interface Msg {
  /** IssueDenom defines a method for issue a denom. */
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
  /** MintNFT defines a method for mint a new nft */
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /** RefundHTLC defines a method for editing a nft. */
  EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
  /** TransferNFT defines a method for transferring a nft. */
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  /** BurnNFT defines a method for burning a nft. */
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  /** TransferDenom defines a method for transferring a denom. */
  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  IssueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse> {
    const data = MsgIssueDenom.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Msg", "IssueDenom", data);
    return promise.then((data) =>
      MsgIssueDenomResponse.decode(new Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Msg", "MintNFT", data);
    return promise.then((data) => MsgMintNFTResponse.decode(new Reader(data)));
  }

  EditNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse> {
    const data = MsgEditNFT.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Msg", "EditNFT", data);
    return promise.then((data) => MsgEditNFTResponse.decode(new Reader(data)));
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request(
      "idep.ion.uptake.Msg",
      "TransferNFT",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Msg", "BurnNFT", data);
    return promise.then((data) => MsgBurnNFTResponse.decode(new Reader(data)));
  }

  TransferDenom(request: MsgTransferDenom): Promise<MsgTransferDenomResponse> {
    const data = MsgTransferDenom.encode(request).finish();
    const promise = this.rpc.request(
      "idep.ion.uptake.Msg",
      "TransferDenom",
      data
    );
    return promise.then((data) =>
      MsgTransferDenomResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
