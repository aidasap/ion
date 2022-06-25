/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Owner, Collection, Denom, BaseNFT } from "../uptake/nft";

export const protobufPackage = "idep.ion.uptake";

/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequest {
  denom_id: string;
  owner: string;
}

/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: number;
}

/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  denom_id: string;
  owner: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  owner: Owner | undefined;
  pagination: PageResponse | undefined;
}

/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequest {
  denom_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponse {
  collection: Collection | undefined;
  pagination: PageResponse | undefined;
}

/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
  denom_id: string;
}

/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
  denom: Denom | undefined;
}

/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
  denoms: Denom[];
  pagination: PageResponse | undefined;
}

/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  denom_id: string;
  token_id: string;
}

/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  nft: BaseNFT | undefined;
}

const baseQuerySupplyRequest: object = { denom_id: "", owner: "" };

export const QuerySupplyRequest = {
  encode(
    message: QuerySupplyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyRequest {
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QuerySupplyRequest): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQuerySupplyResponse: object = { amount: 0 };

export const QuerySupplyResponse = {
  encode(
    message: QuerySupplyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySupplyResponse {
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseQueryOwnerRequest: object = { denom_id: "", owner: "" };

export const QueryOwnerRequest = {
  encode(message: QueryOwnerRequest, writer: Writer = Writer.create()): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOwnerRequest } as QueryOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerRequest {
    const message = { ...baseQueryOwnerRequest } as QueryOwnerRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOwnerRequest): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = { ...baseQueryOwnerRequest } as QueryOwnerRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOwnerResponse: object = {};

export const QueryOwnerResponse = {
  encode(
    message: QueryOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOwnerResponse } as QueryOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerResponse {
    const message = { ...baseQueryOwnerResponse } as QueryOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromJSON(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined &&
      (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = { ...baseQueryOwnerResponse } as QueryOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    } else {
      message.owner = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCollectionRequest: object = { denom_id: "" };

export const QueryCollectionRequest = {
  encode(
    message: QueryCollectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionRequest {
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollectionRequest>
  ): QueryCollectionRequest {
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCollectionResponse: object = {};

export const QueryCollectionResponse = {
  encode(
    message: QueryCollectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollectionResponse>
  ): QueryCollectionResponse {
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDenomRequest: object = { denom_id: "" };

export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: Writer = Writer.create()): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomRequest {
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    return message;
  },

  toJSON(message: QueryDenomRequest): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomRequest>): QueryDenomRequest {
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    return message;
  },
};

const baseQueryDenomResponse: object = {};

export const QueryDenomResponse = {
  encode(
    message: QueryDenomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomResponse {
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined &&
      (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomResponse>): QueryDenomResponse {
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },
};

const baseQueryDenomsRequest: object = {};

export const QueryDenomsRequest = {
  encode(
    message: QueryDenomsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsRequest {
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsRequest>): QueryDenomsRequest {
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDenomsResponse: object = {};

export const QueryDenomsResponse = {
  encode(
    message: QueryDenomsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsResponse {
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsResponse>): QueryDenomsResponse {
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryNFTRequest: object = { denom_id: "", token_id: "" };

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: Writer = Writer.create()): Writer {
    if (message.denom_id !== "") {
      writer.uint32(10).string(message.denom_id);
    }
    if (message.token_id !== "") {
      writer.uint32(18).string(message.token_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom_id = reader.string();
          break;
        case 2:
          message.token_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = String(object.denom_id);
    } else {
      message.denom_id = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = String(object.token_id);
    } else {
      message.token_id = "";
    }
    return message;
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.denom_id !== undefined && (obj.denom_id = message.denom_id);
    message.token_id !== undefined && (obj.token_id = message.token_id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denom_id = object.denom_id;
    } else {
      message.denom_id = "";
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.token_id = object.token_id;
    } else {
      message.token_id = "";
    }
    return message;
  },
};

const baseQueryNFTResponse: object = {};

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: Writer = Writer.create()): Writer {
    if (message.nft !== undefined) {
      BaseNFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = BaseNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = BaseNFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? BaseNFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = BaseNFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service for NFT module */
export interface Query {
  /** Supply queries the total supply of a given denom or owner */
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
  /** Owner queries the NFTs of the specified owner */
  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>;
  /** Collection queries the NFTs of the specified denom */
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  /** Denom queries the definition of a given denom */
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  /** Denoms queries all the denoms */
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  /** NFT queries the NFT for the given denom and token ID */
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
    const data = QuerySupplyRequest.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Query", "Supply", data);
    return promise.then((data) => QuerySupplyResponse.decode(new Reader(data)));
  }

  Owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse> {
    const data = QueryOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Query", "Owner", data);
    return promise.then((data) => QueryOwnerResponse.decode(new Reader(data)));
  }

  Collection(
    request: QueryCollectionRequest
  ): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "idep.ion.uptake.Query",
      "Collection",
      data
    );
    return promise.then((data) =>
      QueryCollectionResponse.decode(new Reader(data))
    );
  }

  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new Reader(data)));
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new Reader(data)));
  }

  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("idep.ion.uptake.Query", "NFT", data);
    return promise.then((data) => QueryNFTResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
