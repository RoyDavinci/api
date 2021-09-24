const axios = require("axios").default;
const crypto = require("crypto");

// function for multichoice
const multiChoiceValidationRequest = (req, res) => {
	const { service, channel, type, account } = req.body;

	const options = {
		service,
		channel,
		type,
		account,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const multiChoiceValidation = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/cabletv/validation",
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
	multiChoiceValidation();
};

// function for cablebouquetsrequest
const cableBouquetsRequest = (req, res) => {
	const { service, type } = req.body;

	const options = {
		service,
		type,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const cableBouquets = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/cabletv/bouquets",
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
	cableBouquets();
};

// function for cableaddonrequest
const cableAddonRequest = (req, res) => {
	const { service, type } = req.body;

	const options = {
		service,
		type,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const cableAddon = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.76:1880/api/v1/vas/cabletv/bouquets/addons",
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
	cableAddon();
};

// function for cableTvRequest

const cableTvBouquets = (req, res) => {
	const { service, type } = req.body;

	const options = {
		service,
		type,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const cableTv = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/cabletv/bouquets",
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
	cableTv();
};

module.exports = {
	cableAddonRequest,
	cableBouquetsRequest,
	cableTvBouquets,
	multiChoiceValidationRequest,
};
