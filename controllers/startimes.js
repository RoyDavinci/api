const axios = require("axios").default;
const crypto = require("crypto");

//startimes subscription
const startimesAccount = (req, res) => {
	const {
		phone,
		code,
		paymentMethod,
		service,
		clientReference,
		pin,
		productMonths,
		totalAmount,
		addonCode,
		addonMonths,
		addonPrice,
		productCode,
	} = req.body;

	const options = {
		phone,
		code,
		paymentMethod,
		service,
		clientReference,
		pin,
		productMonths,
		totalAmount,
		addonCode,
		addonMonths,
		addonPrice,
		productCode,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const getSubscription = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/cabletv/subscription",
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
	getSubscription();
};

module.exports = { startimesAccount };
