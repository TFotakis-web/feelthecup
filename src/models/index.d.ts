import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TransactionStatus {
  RECEIVED = "RECEIVED",
  RETURNED = "RETURNED",
  LOST = "LOST"
}

export declare class Address {
  readonly country: string;
  readonly city: string;
  readonly street: string;
  readonly number: string;
  readonly postal_code: number;
  constructor(init: ModelInit<Address>);
}

export declare class Store {
  readonly id: string;
  readonly uid: string;
  readonly phone: string;
  readonly municipality: string;
  readonly balance: number;
  readonly latitude: number;
  readonly longitude: number;
  readonly cups_remaining: number;
  readonly address: Address;
  constructor(init: ModelInit<Store>);
}

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly mobile_number: string;
  readonly birthdate: string;
  readonly cup_balance: number;
  readonly credits: number;
  readonly loyalty_balance?: number;
  readonly no_of_cups_lost?: number;
  readonly address?: Address;
  readonly stores?: (Store | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Transaction {
  readonly id: string;
  readonly udi: string;
  readonly status: TransactionStatus | keyof typeof TransactionStatus;
  readonly points: number;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}