/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SushiToken, SushiTokenInterface } from "../SushiToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526301406f406002556040518060400160405280600581526020017f73757368690000000000000000000000000000000000000000000000000000008152506003908051906020019062000059929190620001fa565b506040518060400160405280600381526020017f736875000000000000000000000000000000000000000000000000000000000081525060049080519060200190620000a7929190620001fa565b506012600560006101000a81548160ff021916908360ff160217905550348015620000d157600080fd5b50600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141562000145576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200013c906200030b565b60405180910390fd5b6002546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600254604051620001ec919062000348565b60405180910390a3620003ca565b828054620002089062000394565b90600052602060002090601f0160209004810192826200022c576000855562000278565b82601f106200024757805160ff191683800117855562000278565b8280016001018555821562000278579182015b82811115620002775782518255916020019190600101906200025a565b5b5090506200028791906200028b565b5090565b5b80821115620002a65760008160009055506001016200028c565b5090565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620002f3601f83620002aa565b91506200030082620002bb565b602082019050919050565b600060208201905081810360008301526200032681620002e4565b9050919050565b6000819050919050565b62000342816200032d565b82525050565b60006020820190506200035f600083018462000337565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003ad57607f821691505b60208210811415620003c457620003c362000365565b5b50919050565b61121a80620003da6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063313ce56711610071578063313ce5671461017a57806355b6ed5c1461019857806370a08231146101c857806395d89b41146101f8578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a57806327e235e31461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610304565b6040516100f39190610c22565b60405180910390f35b610104610322565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610328565b6040516101419190610c22565b60405180910390f35b610164600480360381019061015f9190610cba565b610429565b6040516101719190610c4c565b60405180910390f35b610182610441565b60405161018f9190610d03565b60405180910390f35b6101b260048036038101906101ad9190610d1e565b610454565b6040516101bf9190610c4c565b60405180910390f35b6101e260048036038101906101dd9190610cba565b610479565b6040516101ef9190610c4c565b60405180910390f35b6102006104c1565b60405161020d9190610b0c565b60405180910390f35b610230600480360381019061022b9190610bc7565b61054f565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b61056d565b60405161026d9190610c4c565b60405180910390f35b6003805461028390610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90610d8d565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b505050505081565b60006103186103116105f4565b84846105fc565b6001905092915050565b60025481565b60006103358484846107c7565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006103806105f4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f790610e31565b60405180910390fd5b61041d8561040c6105f4565b85846104189190610e80565b6105fc565b60019150509392505050565b60006020528060005260406000206000915090505481565b600560009054906101000a900460ff1681565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600480546104ce90610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546104fa90610d8d565b80156105475780601f1061051c57610100808354040283529160200191610547565b820191906000526020600020905b81548152906001019060200180831161052a57829003601f168201915b505050505081565b600061056361055c6105f4565b84846107c7565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561066c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066390610f26565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d390610fb8565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107ba9190610c4c565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610837576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082e9061104a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089e906110dc565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091f9061116e565b60405180910390fd5b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109729190610e80565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a02919061118e565b925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a669190610c4c565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aad578082015181840152602081019050610a92565b83811115610abc576000848401525b50505050565b6000601f19601f8301169050919050565b6000610ade82610a73565b610ae88185610a7e565b9350610af8818560208601610a8f565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060208284031215610cd057610ccf610b2e565b5b6000610cde84828501610b7c565b91505092915050565b600060ff82169050919050565b610cfd81610ce7565b82525050565b6000602082019050610d186000830184610cf4565b92915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b60208210811415610db957610db8610d5e565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000610e1b602883610a7e565b9150610e2682610dbf565b604082019050919050565b60006020820190508181036000830152610e4a81610e0e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e8b82610b91565b9150610e9683610b91565b925082821015610ea957610ea8610e51565b5b828203905092915050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f10602483610a7e565b9150610f1b82610eb4565b604082019050919050565b60006020820190508181036000830152610f3f81610f03565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa2602283610a7e565b9150610fad82610f46565b604082019050919050565b60006020820190508181036000830152610fd181610f95565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611034602583610a7e565b915061103f82610fd8565b604082019050919050565b6000602082019050818103600083015261106381611027565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006110c6602383610a7e565b91506110d18261106a565b604082019050919050565b600060208201905081810360008301526110f5816110b9565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611158602683610a7e565b9150611163826110fc565b604082019050919050565b600060208201905081810360008301526111878161114b565b9050919050565b600061119982610b91565b91506111a483610b91565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111d9576111d8610e51565b5b82820190509291505056fea264697066735822122086f468976b5824ab72b0b1461d6b22e236df6c3fc753a36a7be83a23c143762e64736f6c634300080b0033";

type SushiTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SushiTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SushiToken__factory extends ContractFactory {
  constructor(...args: SushiTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SushiToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiToken> {
    return super.deploy(overrides || {}) as Promise<SushiToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SushiToken {
    return super.attach(address) as SushiToken;
  }
  connect(signer: Signer): SushiToken__factory {
    return super.connect(signer) as SushiToken__factory;
  }
  static readonly contractName: "SushiToken";
  public readonly contractName: "SushiToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiTokenInterface {
    return new utils.Interface(_abi) as SushiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiToken {
    return new Contract(address, _abi, signerOrProvider) as SushiToken;
  }
}
