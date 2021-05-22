var AWS = require('aws-sdk')

AWS.config.update({ region: process.env.REGION })

var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });


exports.handler = (event, context, callback) => {
	var params = {
		TableName: 'User-eyu4z27svvgz5gygj4jebjutl4-dev', //TODO to be changed to process.env...
		Item: {
			'id': {
				S: event.request.userAttributes.sub
			},
			'name': { S: event.request.userAttributes.name },
			'surname': { S: event.request.userAttributes.family_name },
			'email': { S: event.request.userAttributes.email },
			'mobileNumber': { S: event.request.userAttributes.phone_number },
			'birthdate': { S: event.request.userAttributes.birthdate },
			'cup_balance': { S: '0' },
			'credits': { S: '0' },
			'loyaltyBalance': { S: '0' },
			'noOfCupsLost': { S: '0' },
			'address': { S: 'Null' }
		}
	};

	ddb.putItem(params, function (err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data);
		}
	});
	callback(null, event);
};
