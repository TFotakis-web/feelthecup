// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransactionStatus = {
  "RECEIVED": "RECEIVED",
  "RETURNED": "RETURNED",
  "LOST": "LOST"
};

const { User, Transaction, Address, Store } = initSchema(schema);

export {
  User,
  Transaction,
  TransactionStatus,
  Address,
  Store
};