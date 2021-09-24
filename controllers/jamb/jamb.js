const axios = require("axios").default;
const crypto = require("crypto");

//JAMB Payment

const jambPayment = (req, res) => {
	const { service, channel } = req.body;

	const options = {
		service,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const jambLookup = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/jamb/service/lookup",
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
	jambLookup();
};
//Jamb Candidate Validation

const jambCandidateValidation = (req, res) => {
	const { service, channel, confirmationCode } = req.body;

	const options = {
		service,
		channel,
		confirmationCode,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const jambValidate = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/jamb/candidate/validate",
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
	jambValidate();
};
//Jamb PIN Purchase

const jambPinPurchaserequest = (req, res) => {
	const {
		customerPhoneNumber,
		confirmationCode,
		service,
		email,
		paymentMethod,
		clientReference,
		pin,
		productCode,
	} = req.body;

	const options = {
		customerPhoneNumber,
		confirmationCode,
		service,
		email,
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

	const jambPinPurchase = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/jamb/pin/purchase",
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
	jambPinPurchase();
};
//JAMB DROP PIN

const jambDropPinRequest = (req, res) => {
	const { service, pin, channel } = req.body;

	const options = {
		pin,
		service,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const jambDropPin = async () => {
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
	jambDropPin();
};

module.exports = {
	jambCandidateValidation,
	jambDropPinRequest,
	jambPayment,
	jambPinPurchaserequest,
};
