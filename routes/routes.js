const express = require("express");
const balanceController = require("../controllers/balance");
const encryptController = require("../controllers/api");
const vtuController = require("../controllers/vtu");
const startimesController = require("../controllers/startimes");
const remitaController = require("../controllers/RRR/rrr");
const electricityController = require("../controllers/electricity/electricity");
const internetController = require("../controllers/internet/internet");
const jambController = require("../controllers/jamb/jamb");
const multichoiceController = require("../controllers/multichoice/multichoice");
const lccController = require("../controllers/LCC/lcc");
const dataController = require("../controllers/data/data");
const requeryController = require("../controllers/requery");
const newtoken = require("../controllers/token");
const router = express.Router();

//TOKEN URL
router.get("/token", newtoken.getToken);

//GLOBAL ROUTES

router.post("/", encryptController.encryptPin);
router.post("/vtu", vtuController.vtuActivate);
router.post("/balance", balanceController.balanceDetails);
router.post("/startimes", startimesController.startimesAccount);

//REMITA ROUTES
router
	.post("/remitastatus", remitaController.rrStatus)
	.post("/remitapayment", remitaController.rrrPayment)
	.post("/remitalookup", remitaController.rrLookup);

//ELECTRICITY ROUTES
router
	.post("/electricity", electricityController.getElectricity)
	.post("/light", electricityController.buyLight);
//INTERNET ROUTES

router
	.post("/internetvalidate", internetController.internetValidationRequest)
	.post("/internetpurchase", internetController.internetPurchaseRequest)
	.post("/internetbundles", internetController.internetBundlesRequest);

//JAMB ROUTES

router
	.post("/jambpayment", jambController.jambPayment)
	.post("/jambdroppin", jambController.jambDropPinRequest)
	.post("/jambcandidatevalidate", jambController.jambCandidateValidation)
	.post("/jambpinpurchase", jambController.jambPinPurchaserequest);

//CABLE ROUTES

router
	.post("/multichoice", multichoiceController.multiChoiceValidationRequest)
	.post("cabletvaddon", multichoiceController.cableAddonRequest)
	.post("cabletvbouquets", multichoiceController.cableTvBouquets)
	.post("cablebouquets", multichoiceController.cableBouquetsRequest);

//LCC ROUTES

router
	.post("lccpayment", lccController.lccPaymentRequest)
	.post("lccvalidate", lccController.lccValidateRequest);

//DATA ROUTES
router
	.post("checkdata", dataController.checkData)
	.post("subscribedata", dataController.subscribeData);

//REQUERY ROUTE
router.post("/requery", requeryController.requery);

module.exports = router;
