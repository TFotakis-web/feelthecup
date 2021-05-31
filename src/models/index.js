// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';


const TransactionStatus = {
	'RECEIVED': 'RECEIVED',
	'RETURNED': 'RETURNED',
	'LOST': 'LOST',
};

const RewardType = {
	'ON_TIME_RETURN': 'ON_TIME_RETURN',
	'SUGGESTED_LOCATION_RETURN': 'SUGGESTED_LOCATION_RETURN',
};

const { User, Store, Transaction, Address, Deposit, Contract, Plan, Invoice, Reward } = initSchema(schema);

export {
	User,
	Store,
	Transaction,
	TransactionStatus,
	RewardType,
	Address,
	Deposit,
	Contract,
	Plan,
	Invoice,
	Reward,
};
