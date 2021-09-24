const axios = require("axios").default;
const crypto = require("crypto");

// function for encryptPin

const encryptPin = (req, res) => {
	const wallet = req.body.wallet;
	const password = req.body.password;
	const pin = req.body.pin;
	const username = req.body.username;
	const options = {
		wallet: wallet,
		password: password,
		username: username,
		pin: pin,
	};
	const getData = async () => {
		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/vas/credentials/encrypt-pin",
				options
			);
			console.log(resp.data);
			res.status(200).json(resp.data);
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: error });
		}
	};
	getData();
};

module.exports = { encryptPin };
