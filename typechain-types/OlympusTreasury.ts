/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OlympusTreasuryInterface extends utils.Interface {
  contractName: "OlympusTreasury";
  functions: {
    "OHM()": FunctionFragment;
    "auditReserves()": FunctionFragment;
    "authority()": FunctionFragment;
    "baseSupply()": FunctionFragment;
    "blocksNeededForQueue()": FunctionFragment;
    "bondCalculator(address)": FunctionFragment;
    "debtLimit(address)": FunctionFragment;
    "deposit(uint256,address,uint256)": FunctionFragment;
    "disable(uint8,address)": FunctionFragment;
    "disableTimelock()": FunctionFragment;
    "enable(uint8,address,address)": FunctionFragment;
    "excessReserves()": FunctionFragment;
    "execute(uint256)": FunctionFragment;
    "incurDebt(uint256,address)": FunctionFragment;
    "indexInRegistry(address,uint8)": FunctionFragment;
    "initialize()": FunctionFragment;
    "initialized()": FunctionFragment;
    "manage(address,uint256)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "nullify(uint256)": FunctionFragment;
    "ohmDebt()": FunctionFragment;
    "onChainGovernanceTimelock()": FunctionFragment;
    "permissionQueue(uint256)": FunctionFragment;
    "permissions(uint8,address)": FunctionFragment;
    "queueTimelock(uint8,address,address)": FunctionFragment;
    "registry(uint8,uint256)": FunctionFragment;
    "repayDebtWithOHM(uint256)": FunctionFragment;
    "repayDebtWithReserve(uint256,address)": FunctionFragment;
    "sOHM()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setDebtLimit(address,uint256)": FunctionFragment;
    "timelockEnabled()": FunctionFragment;
    "tokenValue(address,uint256)": FunctionFragment;
    "totalDebt()": FunctionFragment;
    "totalReserves()": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "OHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "auditReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baseSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blocksNeededForQueue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bondCalculator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "debtLimit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disable",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enable",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "excessReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incurDebt",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "indexInRegistry",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "manage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nullify",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ohmDebt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onChainGovernanceTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "permissionQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permissions",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "queueTimelock",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registry",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayDebtWithOHM",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayDebtWithReserve",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "sOHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDebtLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timelockEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenValue",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "OHM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "auditReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseSupply", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blocksNeededForQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bondCalculator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtLimit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "disable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "excessReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "incurDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "indexInRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nullify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ohmDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onChainGovernanceTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permissionQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayDebtWithOHM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayDebtWithReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sOHM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDebtLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timelockEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
    "CreateDebt(address,address,uint256,uint256)": EventFragment;
    "Deposit(address,uint256,uint256)": EventFragment;
    "Managed(address,uint256)": EventFragment;
    "Minted(address,address,uint256)": EventFragment;
    "PermissionQueued(uint8,address)": EventFragment;
    "Permissioned(address,uint8,bool)": EventFragment;
    "RepayDebt(address,address,uint256,uint256)": EventFragment;
    "ReservesAudited(uint256)": EventFragment;
    "Withdrawal(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Managed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionQueued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Permissioned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReservesAudited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<[string], { authority: string }>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export type CreateDebtEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { debtor: string; token: string; amount: BigNumber; value: BigNumber }
>;

export type CreateDebtEventFilter = TypedEventFilter<CreateDebtEvent>;

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { token: string; amount: BigNumber; value: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type ManagedEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type ManagedEventFilter = TypedEventFilter<ManagedEvent>;

export type MintedEvent = TypedEvent<
  [string, string, BigNumber],
  { caller: string; recipient: string; amount: BigNumber }
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export type PermissionQueuedEvent = TypedEvent<
  [number, string],
  { status: number; queued: string }
>;

export type PermissionQueuedEventFilter =
  TypedEventFilter<PermissionQueuedEvent>;

export type PermissionedEvent = TypedEvent<
  [string, number, boolean],
  { addr: string; status: number; result: boolean }
>;

export type PermissionedEventFilter = TypedEventFilter<PermissionedEvent>;

export type RepayDebtEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { debtor: string; token: string; amount: BigNumber; value: BigNumber }
>;

export type RepayDebtEventFilter = TypedEventFilter<RepayDebtEvent>;

export type ReservesAuditedEvent = TypedEvent<
  [BigNumber],
  { totalReserves: BigNumber }
>;

export type ReservesAuditedEventFilter = TypedEventFilter<ReservesAuditedEvent>;

export type WithdrawalEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { token: string; amount: BigNumber; value: BigNumber }
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface OlympusTreasury extends BaseContract {
  contractName: "OlympusTreasury";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OlympusTreasuryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    OHM(overrides?: CallOverrides): Promise<[string]>;

    auditReserves(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    baseSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    blocksNeededForQueue(overrides?: CallOverrides): Promise<[BigNumber]>;

    bondCalculator(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    debtLimit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _amount: BigNumberish,
      _token: string,
      _profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disable(
      _status: BigNumberish,
      _toDisable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableTimelock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enable(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    excessReserves(overrides?: CallOverrides): Promise<[BigNumber]>;

    execute(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    incurDebt(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    indexInRegistry(
      _address: string,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    manage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nullify(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ohmDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    onChainGovernanceTimelock(overrides?: CallOverrides): Promise<[BigNumber]>;

    permissionQueue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, BigNumber, boolean, boolean] & {
        managing: number;
        toPermit: string;
        calculator: string;
        timelockEnd: BigNumber;
        nullify: boolean;
        executed: boolean;
      }
    >;

    permissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    queueTimelock(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    repayDebtWithOHM(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repayDebtWithReserve(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sOHM(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDebtLimit(
      _address: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timelockEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    tokenValue(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { value_: BigNumber }>;

    totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  OHM(overrides?: CallOverrides): Promise<string>;

  auditReserves(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authority(overrides?: CallOverrides): Promise<string>;

  baseSupply(overrides?: CallOverrides): Promise<BigNumber>;

  blocksNeededForQueue(overrides?: CallOverrides): Promise<BigNumber>;

  bondCalculator(arg0: string, overrides?: CallOverrides): Promise<string>;

  debtLimit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    _token: string,
    _profit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disable(
    _status: BigNumberish,
    _toDisable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableTimelock(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enable(
    _status: BigNumberish,
    _address: string,
    _calculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  excessReserves(overrides?: CallOverrides): Promise<BigNumber>;

  execute(
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  incurDebt(
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  indexInRegistry(
    _address: string,
    _status: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  manage(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nullify(
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ohmDebt(overrides?: CallOverrides): Promise<BigNumber>;

  onChainGovernanceTimelock(overrides?: CallOverrides): Promise<BigNumber>;

  permissionQueue(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, string, BigNumber, boolean, boolean] & {
      managing: number;
      toPermit: string;
      calculator: string;
      timelockEnd: BigNumber;
      nullify: boolean;
      executed: boolean;
    }
  >;

  permissions(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  queueTimelock(
    _status: BigNumberish,
    _address: string,
    _calculator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  repayDebtWithOHM(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repayDebtWithReserve(
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sOHM(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDebtLimit(
    _address: string,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timelockEnabled(overrides?: CallOverrides): Promise<boolean>;

  tokenValue(
    _token: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _amount: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    OHM(overrides?: CallOverrides): Promise<string>;

    auditReserves(overrides?: CallOverrides): Promise<void>;

    authority(overrides?: CallOverrides): Promise<string>;

    baseSupply(overrides?: CallOverrides): Promise<BigNumber>;

    blocksNeededForQueue(overrides?: CallOverrides): Promise<BigNumber>;

    bondCalculator(arg0: string, overrides?: CallOverrides): Promise<string>;

    debtLimit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _token: string,
      _profit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disable(
      _status: BigNumberish,
      _toDisable: string,
      overrides?: CallOverrides
    ): Promise<void>;

    disableTimelock(overrides?: CallOverrides): Promise<void>;

    enable(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    excessReserves(overrides?: CallOverrides): Promise<BigNumber>;

    execute(_index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    incurDebt(
      _amount: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    indexInRegistry(
      _address: string,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    initialize(overrides?: CallOverrides): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    manage(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nullify(_index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    ohmDebt(overrides?: CallOverrides): Promise<BigNumber>;

    onChainGovernanceTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    permissionQueue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, BigNumber, boolean, boolean] & {
        managing: number;
        toPermit: string;
        calculator: string;
        timelockEnd: BigNumber;
        nullify: boolean;
        executed: boolean;
      }
    >;

    permissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queueTimelock(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registry(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    repayDebtWithOHM(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    repayDebtWithReserve(
      _amount: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sOHM(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDebtLimit(
      _address: string,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timelockEnabled(overrides?: CallOverrides): Promise<boolean>;

    tokenValue(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address)"(
      authority?: string | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(authority?: string | null): AuthorityUpdatedEventFilter;

    "CreateDebt(address,address,uint256,uint256)"(
      debtor?: string | null,
      token?: string | null,
      amount?: null,
      value?: null
    ): CreateDebtEventFilter;
    CreateDebt(
      debtor?: string | null,
      token?: string | null,
      amount?: null,
      value?: null
    ): CreateDebtEventFilter;

    "Deposit(address,uint256,uint256)"(
      token?: string | null,
      amount?: null,
      value?: null
    ): DepositEventFilter;
    Deposit(
      token?: string | null,
      amount?: null,
      value?: null
    ): DepositEventFilter;

    "Managed(address,uint256)"(
      token?: string | null,
      amount?: null
    ): ManagedEventFilter;
    Managed(token?: string | null, amount?: null): ManagedEventFilter;

    "Minted(address,address,uint256)"(
      caller?: string | null,
      recipient?: string | null,
      amount?: null
    ): MintedEventFilter;
    Minted(
      caller?: string | null,
      recipient?: string | null,
      amount?: null
    ): MintedEventFilter;

    "PermissionQueued(uint8,address)"(
      status?: BigNumberish | null,
      queued?: null
    ): PermissionQueuedEventFilter;
    PermissionQueued(
      status?: BigNumberish | null,
      queued?: null
    ): PermissionQueuedEventFilter;

    "Permissioned(address,uint8,bool)"(
      addr?: null,
      status?: BigNumberish | null,
      result?: null
    ): PermissionedEventFilter;
    Permissioned(
      addr?: null,
      status?: BigNumberish | null,
      result?: null
    ): PermissionedEventFilter;

    "RepayDebt(address,address,uint256,uint256)"(
      debtor?: string | null,
      token?: string | null,
      amount?: null,
      value?: null
    ): RepayDebtEventFilter;
    RepayDebt(
      debtor?: string | null,
      token?: string | null,
      amount?: null,
      value?: null
    ): RepayDebtEventFilter;

    "ReservesAudited(uint256)"(
      totalReserves?: BigNumberish | null
    ): ReservesAuditedEventFilter;
    ReservesAudited(
      totalReserves?: BigNumberish | null
    ): ReservesAuditedEventFilter;

    "Withdrawal(address,uint256,uint256)"(
      token?: string | null,
      amount?: null,
      value?: null
    ): WithdrawalEventFilter;
    Withdrawal(
      token?: string | null,
      amount?: null,
      value?: null
    ): WithdrawalEventFilter;
  };

  estimateGas: {
    OHM(overrides?: CallOverrides): Promise<BigNumber>;

    auditReserves(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    baseSupply(overrides?: CallOverrides): Promise<BigNumber>;

    blocksNeededForQueue(overrides?: CallOverrides): Promise<BigNumber>;

    bondCalculator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    debtLimit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _token: string,
      _profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disable(
      _status: BigNumberish,
      _toDisable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableTimelock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enable(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    excessReserves(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    incurDebt(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    indexInRegistry(
      _address: string,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    manage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nullify(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ohmDebt(overrides?: CallOverrides): Promise<BigNumber>;

    onChainGovernanceTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    permissionQueue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queueTimelock(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayDebtWithOHM(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repayDebtWithReserve(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sOHM(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDebtLimit(
      _address: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timelockEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    tokenValue(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auditReserves(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blocksNeededForQueue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bondCalculator(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtLimit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      _token: string,
      _profit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disable(
      _status: BigNumberish,
      _toDisable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableTimelock(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enable(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    excessReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    incurDebt(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    indexInRegistry(
      _address: string,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manage(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nullify(
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ohmDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onChainGovernanceTimelock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permissionQueue(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permissions(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queueTimelock(
      _status: BigNumberish,
      _address: string,
      _calculator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    repayDebtWithOHM(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repayDebtWithReserve(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sOHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDebtLimit(
      _address: string,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timelockEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenValue(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}