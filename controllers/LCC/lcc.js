const axios = require("axios").default;
const crypto = require("crypto");

//LCC Validations

const lccValidateRequest = (req, res) => {
	const { account, channel } = req.body;

	const options = {
		account,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const lccValidate = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/vas/lcc/validation",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIzMTkzODksImV4cCI6MTYzMjMyNjU4OX0.2enxLRcYb9OZoYjmrAtRfsR0Qvqq0ZAd6Tq5SQrkRF4`,
						signature: hash,
					},
				}
			);

			console.log(resp.data);
			return resp.data;
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	lccValidate();
};
//LCC Payment

const lccPaymentRequest = (req, res) => {
	const {
		phone,
		customerName,
		amount,
		paymentMethod,
		clientReference,
		pin,
		productCode,
	} = req.body;

	const options = {
		phone,
		customerName,
		amount,
		paymentMethod,
		clientReference,
		pin,
		productCode,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const lccPayment = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/vas/lcc/payment",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIzMTkzODksImV4cCI6MTYzMjMyNjU4OX0.2enxLRcYb9OZoYjmrAtRfsR0Qvqq0ZAd6Tq5SQrkRF4`,
						signature: hash,
					},
				}
			);

			console.log(resp.data);
			return resp.data;
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	lccPayment();
};

module.exports = { lccPaymentRequest, lccValidateRequest };
