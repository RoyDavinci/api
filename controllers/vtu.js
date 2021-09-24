const axios = require("axios").default;
const crypto = require("crypto");

// function for vtuActivate
const vtuActivate = (req, res) => {
	const { phone, paymentMethod, serviceAmount, pin, clientReference, channel } =
		req.body;

	const options = {
		phone,
		paymentMethod,
		serviceAmount,
		pin,
		clientReference,
		channel,
	};

	const key = "yugiubiuu89io09iohi9io09k";

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");
	const getVtu = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/v1/vas/vtu/purchase",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIzMTc0ODAsImV4cCI6MTYzMjMyNDY4MH0.DY1qT7HPpjnC2t4xbGrV1jC61KiBTYp-RYpgPu38Cu8`,
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
	getVtu();
};

module.exports = { vtuActivate };
