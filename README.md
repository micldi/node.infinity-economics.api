Infinity Economics Node API (node.infinity-economics.api)
============
Node Infinity Economics API is an asynchronous node.js library for the Infinity Economics (XIN) Node API - http://infinity-economics.org.
It support all currently public Node API method. You can see it [here](http://199.127.137.169:9005/docs/).

## Install

For node.js

```
npm install node.infinity-economics.api
```

## Example

In Node.js:

```javascript
const InfinityEconomicsNode = require('node.infinity-economics.api');
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
```
----
```javascript
const IEN = new InfinityEconomicsNode(host, port, ssl);
```
----
```javascript
IEN.(PARAMETERS, CALLBACK);
```
## Donation

* `BTC: 1E8dgE3WtAViTPSUYu5wW5CWS67uoUhwxT`
* `XIN: XIN-J4MN-DHLX-KES4-GEPBN`