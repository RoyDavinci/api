const axios = require("axios").default;
const crypto = require("crypto");

// function for balancedetails
const balanceDetails = (req, res) => {
	const { username, walletId } = req.body;

	const options = {
		walletId,
		username,
	};
	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(options))
		.digest("hex");

	const getBalance = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/vas/wallet/balance",
				options,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIyODc4NzAsImV4cCI6MTYzMjI5NTA3MH0.5glFkmtD2BCaqKVAYmuQT13yoCAxaZtUaioRKLe2EE0`,
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
	getBalance();
};

module.exports = { balanceDetails };
