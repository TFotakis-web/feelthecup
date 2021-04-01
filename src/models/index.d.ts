import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TransactionStatus {
  RECEIVED = "RECEIVED",
  RETURNED = "RETURNED",
  LOST = "LOST"
}

export enum RewardType {
  ON_TIME_RETURN = "ON_TIME_RETURN",
  SUGGESTED_LOCATION_RETURN = "SUGGESTED_LOCATION_RETURN"
}

export declare class Address {
  readonly country: string;
  readonly city: string;
  readonly municipality: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly street: string;
  readonly number: string;
  readonly postalCode: number;
  constructor(init: ModelInit<Address>);
}

export declare class Deposit {
  readonly amount: number;
  readonly payedAt: string;
  readonly store?: string;
  constructor(init: ModelInit<Deposit>);
}

export declare class Contract {
  readonly id: string;
  readonly store: string;
  readonly plan: Plan;
  readonly invoice: Invoice;
  readonly signedAt: string;
  readonly startingAt: string;
  readonly expiringAt: string;
  constructor(init: ModelInit<Contract>);
}

export declare class Plan {
  readonly rewards?: boolean;
  readonly noOfCups: number;
  readonly charge: number;
  constructor(init: ModelInit<Plan>);
}

export declare class Invoice {
  readonly amount: number;
  readonly generatedAt: string;
  readonly payedAt: string;
  readonly cancelled: boolean;
  constructor(init: ModelInit<Invoice>);
}

export declare class Reward {
  readonly points: number;
  readonly type: RewardType | keyof typeof RewardType;
  constructor(init: ModelInit<Reward>);
}

export declare class User {
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly mobileNumber: string;
  readonly birthdate: string;
  readonly cup_balance: number;
  readonly credits: number;
  readonly loyaltyBalance?: number;
  readonly noOfCupsLost?: number;
  readonly address?: Address;
  readonly stores?: (string | null)[];
  readonly deposits?: (Deposit | null)[];
  readonly friends?: (string | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Store {
  readonly id: string;
  readonly uid: string;
  readonly phone: string;
  readonly email: string;
  readonly cupsDefault: number;
  readonly cupsRemaining: number;
  readonly address: Address;
  readonly tin: number;
  readonly active: boolean;
  readonly contracts?: (Contract | null)[];
  constructor(init: ModelInit<Store>);
  static copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

export declare class Transaction {
  readonly id: string;
  readonly user: string;
  readonly status: TransactionStatus | keyof typeof TransactionStatus;
  readonly rewards?: (Reward | null)[];
  readonly receivedFrom?: string;
  readonly receivedAt?: string;
  readonly returnedTo?: string;
  readonly returnedAt?: string;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}