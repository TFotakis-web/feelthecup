var aws = require('aws-sdk');
aws.config.update({ region: process.env.REGION });
var ddb = new aws.DynamoDB();


exports.handler = async (event, context, callback) => {
	if (!event.request.userAttributes.sub) {
		console.log("Error: Nothing was written to DynamoDB");
		context.done(null, event);
		return;
	}

	let date = new Date();
	date = date.toISOString();
	let params = {
		TableName: `User-${process.env.DYNAMODB_TABLE_HASH}-${process.env.ENV}`,
		Item: {
			'id': { S: event.request.userAttributes.sub },
			'__typename': { S: 'User' },
			'username': { S: event.userName },
			'email': { S: event.request.userAttributes.email },
			'name': { S: event.request.userAttributes.name },
			'surname': { S: event.request.userAttributes.family_name },
			'email': { S: event.request.userAttributes.email },
			'mobileNumber': { S: event.request.userAttributes.phone_number },
			'birthdate': { S: event.request.userAttributes.birthdate },
			'cup_balance': { S: '0' },
			'credits': { S: '0' },
			'loyaltyBalance': { S: '0' },
			'noOfCupsLost': { S: '0' },
			'address': { S: 'Null' },
			'createdAt': { S: date },
			'updatedAt': { S: date },
		},
	};

	try {
		await ddb.putItem(params).promise();
		console.log("- Success");
	}
	catch (err) {
		console.error("- Error: ", err);
	}
	context.done(null, event);
	callback(null, event);
};
