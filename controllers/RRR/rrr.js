const axios = require("axios").default;
const crypto = require("crypto");

//RRR Lookup

const rrLookup = (req, res) => {
	const { rrr, channel } = req.body;

	const options = {
		rrr,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const remitaLookup = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/remita/lookup",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIyOTkzNjUsImV4cCI6MTYzMjMwNjU2NX0.v_Yvc3tzMAs00TP4YAgPU3xgwWgvBNI-SUgILyiOgNQ`,
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
	remitaLookup();
};
//RRR Peyment

const rrrPayment = (req, res) => {
	const {
		phone,
		payerName,
		debittedAccount,
		incomeAccount,
		paymentMethod,
		clientReference,
		pin,
		productCode,
		card: {},
	} = req.body;

	const options = {
		phone,
		payerName,
		debittedAccount,
		incomeAccount,
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

	const remitaPayment = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/remita/payment",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIyOTkzNjUsImV4cCI6MTYzMjMwNjU2NX0.v_Yvc3tzMAs00TP4YAgPU3xgwWgvBNI-SUgILyiOgNQ`,
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
	remitaPayment();
};
//RRR Status

const rrStatus = (req, res) => {
	const { rrr, channel, transactionId } = req.body;

	const options = {
		rrr,
		channel,
		transactionId,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const remitaStatus = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/remita/status",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIyOTkzNjUsImV4cCI6MTYzMjMwNjU2NX0.v_Yvc3tzMAs00TP4YAgPU3xgwWgvBNI-SUgILyiOgNQ`,
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
	remitaStatus();
};

module.exports = { rrLookup, rrStatus, rrrPayment };
