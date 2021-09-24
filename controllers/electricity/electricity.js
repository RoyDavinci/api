const axios = require("axios").default;
const crypto = require("crypto");

// // function to get electricity

const getElectricity = (req, res) => {
	const service = req.body.service;
	const accountType = req.body.accountType;
	const meterNo = req.body.meterNo;
	const amount = req.body.amount;
	const channel = req.body.channel;

	const options = {
		meterNo,
		accountType,
		service,
		amount,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const getLight = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/electricity/validation",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIzMTkzODksImV4cCI6MTYzMjMyNjU4OX0.2enxLRcYb9OZoYjmrAtRfsR0Qvqq0ZAd6Tq5SQrkRF4`,
						signature: hash,
					},
				}
			);
			console.log(resp.data);
			res.status(200).json(resp.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	getLight();
};

// // function to getLight
const buyLight = (req, res) => {
	const {
		paymentMethod,
		customerPhoneNumber,
		service,
		clientReference,
		pin,
		productCode,
	} = req.body;

	const options = {
		customerPhoneNumber,
		paymentMethod,
		service,
		clientReference,
		pin,
		productCode,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const getLight = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/electricity/payment",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIzMTkzODksImV4cCI6MTYzMjMyNjU4OX0.2enxLRcYb9OZoYjmrAtRfsR0Qvqq0ZAd6Tq5SQrkRF4`,
						signature: hash,
					},
				}
			);
			console.log(resp.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	getLight();
};

module.exports = { getElectricity, buyLight };
