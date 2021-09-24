const crypto = require("crypto");
const axios = require("axios").default;

// function for requery

const requery = (req, res) => {
	const { wallet, reference, clientReference, sequence } = req.body;
	const body = { wallet, reference, clientReference, sequence };

	const hash = crypto
		.createHmac("sha256", key)
		.update(JSON.stringify(body))
		.digest("hex");

	const requeryOperation = async () => {
		try {
			let response = await axios.post(
				"http://197.253.19.76:8006/api/v1/vas/storage/fetch/transaction",
				body,
				{
					headers: {
						token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpdGV4dmFzIiwic3ViIjoiMzA4NDUzNDQiLCJ3YWxsZXQiOiIzMDg0NTM0NCIsInRlcm1pbmFsIjoiMzA4NDUzNDQiLCJ1c2VybmFtZSI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiaWRlbnRpZmllciI6InJpbmdvIiwia2V5IjoieXVnaXViaXV1ODlpbzA5aW9oaTlpbzA5ayIsInZlbmRUeXBlIjoiQjJCIiwibW9kZSI6InRlc3QiLCJlbWFpbCI6Imdlb3JnZWlAcmluZ28uY29tLm5nIiwiZnVsbE5hbWUiOiJSaW5nbyIsIm9yZ2FuaXNhdGlvbkNvZGUiOiIwMDEwMTI5OTQiLCJpYXQiOjE2MzIyOTkzNjUsImV4cCI6MTYzMjMwNjU2NX0.v_Yvc3tzMAs00TP4YAgPU3xgwWgvBNI-SUgILyiOgNQ`,
						signature: hash,
					},
				}
			);
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	requeryOperation();
};

module.exports = { requery };
