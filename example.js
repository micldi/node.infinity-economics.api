const InfinityEconomicsNode = require('./node.infinity-economics.api.js');
const IEN = new InfinityEconomicsNode("185.35.139.105", 23457, false);

IEN.getAccount({account: "XIN-Q79A-8AW3-4M38-BETPE"}, function(response, error) {
	if(error) {
		console.error(error);

		return;
	}
	
	console.log(response);
});


IEN.getPolls(null, function(response, error) {
	if(error) {
		console.error(error);

		return;
	}
	
	console.log(response);
});