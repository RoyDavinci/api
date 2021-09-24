const axios = require("axios").default;
require("dotenv").config();

const getToken = (req, res) => {
	const newToken = async () => {
		const options = {
			wallet: process.env.WALLET,
			username: process.env.USERNAMEID,
			password: process.env.PASSWORD,
			identifier: process.env.IDENTIFIER,
		};

		try {
			let resp = await axios.post(
				"http://197.253.19.78:1880/api/vas/authenticate/me",
				options
			);
			res.status(200).json(resp.data);
		} catch (error) {
			res.status(500).json({ msg: err });
			console.log(error);
		}
	};
	newToken();
};

module.exports = { getToken };
