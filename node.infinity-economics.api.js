/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 * node.infinity-economics.api
 * https://github.com/micldi/node.infinity-economics.api
 *
 * ------------------------------------------------------------ 
 *
 * Copyright 2017-, mic_ldi (micldi) <mic@ldi.pl>
 * Released under the MIT License
 * \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */

const	_req = require('request');

const InfinityEconomicsNode = function (host, port, ssl) {

	const	_host = host,
			_port = port,
			_ssl  = (ssl === true) ? 'https://' :'http://';

	const	makeRequest = function(type, parms, method, callback) {

		var urlParms = "";

		for (var key in parms) {
		    if (urlParms != "") {
		        urlParms += "&";
		    }
		    urlParms += key + "=" + parms[key];
		}

		_req({
		        url: _ssl+host+":"+port+"/api?requestType="+type+"&"+urlParms,
		        method: method,
		        headers: {
			      'User-Agent': 'Mozilla/4.0 (compatible; Node Infinity Economics API)',
			      'Content-type': 'application/x-www-form-urlencoded'
			    }
		    }, function (error, response, body) {

	    	if (!body || !response || response.statusCode != 200) {
	            let errorCallback = {
	            	error: error,
	            	response: response
	            }

	            callback(null, errorCallback);
	        } else {

	            callback(JSON.parse(response.body), null);
	        }
	    });
	};

	/**
		Account
	**/

	this.deleteAccountProperty = function (parms, callback) {
		makeRequest("deleteAccountProperty", parms, "POST", callback);
	}

	this.getAccount = function (parms, callback) {
		makeRequest("getAccount", parms, "GET", callback);
	}

	this.getAccountBlockCount = function (parms, callback) {
		makeRequest("getAccountBlockCount", parms, "GET", callback);
	}

	this.getAccountBlockIds = function (parms, callback) {
		makeRequest("getAccountBlockIds", parms, "GET", callback);
	}

	this.getAccountBlock = function (parms, callback) {
		makeRequest("getAccountBlock", parms, "GET", callback);
	}

	this.getAccountId = function (parms, callback) {
		makeRequest("getAccountId", parms, "POST", callback);
	}

	this.getAccountLessors = function (parms, callback) {
		makeRequest("getAccountLessors", parms, "GET", callback);
	}

	this.getAccountPublicKey = function (parms, callback) {
		makeRequest("getAccountPublicKey", parms, "GET", callback);
	}

	this.getBalance = function (parms, callback) {
		makeRequest("getBalance", parms, "GET", callback);
	}

	this.getGuaranteedBalance = function (parms, callback) {
		makeRequest("getGuaranteedBalance", parms, "GET", callback);
	}

	this.getUnconfirmedTransactionIds = function (parms, callback) {
		makeRequest("getUnconfirmedTransactionIds", parms, "GET", callback);
	}

	this.getUnconfirmedTransaction = function (parms, callback) {
		makeRequest("getUnconfirmedTransaction", parms, "GET", callback);
	}

	this.searchAccounts = function (parms, callback) {
		makeRequest("searchAccounts", parms, "GET", callback);
	}

	this.sendMoney = function (parms, callback) {
		makeRequest("sendMoney", parms, "POST", callback);
	}

	this.getBlockchainTransactions = function (parms, callback) {
		makeRequest("getBlockchainTransactions", parms, "GET", callback);
	}

	this.setAccountInfo = function (parms, callback) {
		makeRequest("setAccountInfo", parms, "POST", callback);
	}

	this.setAccountProperty = function (parms, callback) {
		makeRequest("setAccountProperty", parms, "POST", callback);
	}

	this.getAccountAssets = function (parms, callback) {
		makeRequest("getAccountAssets", parms, "GET", callback);
	}

	this.getAccountCurrencies = function (parms, callback) {
		makeRequest("getAccountCurrencies", parms, "GET", callback);
	}

	this.getAccountCurrencyCount = function (parms, callback) {
		makeRequest("getAccountCurrencyCount", parms, "GET", callback);
	}

	this.getAccountAssetCount = function (parms, callback) {
		makeRequest("getAccountAssetCount", parms, "GET", callback);
	}

	this.getAccountCurrentAskOrderIds = function (parms, callback) {
		makeRequest("getAccountCurrentAskOrderIds", parms, "GET", callback);
	}

	this.getAccountCurrentBidOrderIds = function (parms, callback) {
		makeRequest("getAccountCurrentBidOrderIds", parms, "GET", callback);
	}

	this.getAccountCurrentAskOrders = function (parms, callback) {
		makeRequest("getAccountCurrentAskOrders", parms, "GET", callback);
	}

	this.getAccountCurrentBidOrders = function (parms, callback) {
		makeRequest("getAccountCurrentBidOrders", parms, "GET", callback);
	}

	this.getAccountExchangeRequests = function (parms, callback) {
		makeRequest("getAccountExchangeRequests", parms, "GET", callback);
	}

	this.getAllPhasingOnlyControls = function (parms, callback) {
		makeRequest("getAllPhasingOnlyControls", parms, "GET", callback);
	}

	this.getPhasingOnlyContro = function (parms, callback) {
		makeRequest("getPhasingOnlyContro", parms, "GET", callback);
	}

	this.setPhasingOnlyControl = function (parms, callback) {
		makeRequest("setPhasingOnlyControl", parms, "POST", callback);
	}

	/**
		Aliases
	**/

	this.sellAlias = function (parms, callback) {
		makeRequest("sellAlias", parms, "POST", callback);
	}

	this.deleteAlias = function (parms, callback) {
		makeRequest("deleteAlias", parms, "POST", callback);
	}

	this.getAlias = function (parms, callback) {
		makeRequest("getAlias", parms, "GET", callback);
	}

	this.getAliasCount = function (parms, callback) {
		makeRequest("getAliasCount", parms, "GET", callback);
	}

	this.getAliases = function (parms, callback) {
		makeRequest("getAliases", parms, "GET", callback);
	}

	this.getAliasesLike = function (parms, callback) {
		makeRequest("getAliasesLike", parms, "GET", callback);
	}

	this.buyAlias = function (parms, callback) {
		makeRequest("buyAlias", parms, "POST", callback);
	}

	this.setAlias = function (parms, callback) {
		makeRequest("setAlias", parms, "POST", callback);
	}

	this.getAliasesPublicOffers = function (parms, callback) {
		makeRequest("getAliasesPublicOffers", parms, "GET", callback);
	}

	this.getAliasesOpenOffers = function (parms, callback) {
		makeRequest("getAliasesOpenOffers", parms, "GET", callback);
	}

	/**
		Assets
	**/

	this.cancelBidOrder = function (parms, callback) {
		makeRequest("cancelBidOrder", parms, "POST", callback);
	}

	this.cancelAskOrder = function (parms, callback) {
		makeRequest("cancelAskOrder", parms, "POST", callback);
	}

	this.deleteAssetShares = function (parms, callback) {
		makeRequest("deleteAssetShares", parms, "POST", callback);
	}

	this.dividendPayment = function (parms, callback) {
		makeRequest("dividendPayment", parms, "POST", callback);
	}

	this.getAllAssets = function (parms, callback) {
		makeRequest("getAllAssets", parms, "GET", callback);
	}

	this.getAllOpenBidOrders = function (parms, callback) {
		makeRequest("getAllOpenBidOrders", parms, "GET", callback);
	}

	this.getAllOpenAskOrders = function (parms, callback) {
		makeRequest("getAllOpenAskOrders", parms, "GET", callback);
	}

	this.getAllTrades = function (parms, callback) {
		makeRequest("getAllTrades", parms, "GET", callback);
	}

	this.getAsset = function (parms, callback) {
		makeRequest("getAsset", parms, "GET", callback);
	}

	this.getAssetAccountCount = function (parms, callback) {
		makeRequest("getAssetAccountCount", parms, "GET", callback);
	}

	this.getAssetAccounts = function (parms, callback) {
		makeRequest("getAssetAccounts", parms, "GET", callback);
	}

	this.getAssetDeletes = function (parms, callback) {
		makeRequest("getAssetDeletes", parms, "GET", callback);
	}

	this.getAssetIds = function (parms, callback) {
		makeRequest("getAssetIds", parms, "GET", callback);
	}

	this.getAssetTransfers = function (parms, callback) {
		makeRequest("getAssetTransfers", parms, "GET", callback);
	}

	this.getAssets = function (parms, callback) {
		makeRequest("getAssets", parms, "GET", callback);
	}

	this.getAssetsByIssue = function (parms, callback) {
		makeRequest("getAssetsByIssue", parms, "GET", callback);
	}

	this.getExpectedAssetDeletes = function (parms, callback) {
		makeRequest("getExpectedAssetDeletes", parms, "GET", callback);
	}

	this.getExpectedAssetTransfers = function (parms, callback) {
		makeRequest("getExpectedAssetTransfers", parms, "GET", callback);
	}

	this.getBidOrder = function (parms, callback) {
		makeRequest("getBidOrder", parms, "GET", callback);
	}

	this.getAskOrder = function (parms, callback) {
		makeRequest("getAskOrder", parms, "GET", callback);
	}

	this.getBidOrderIds = function (parms, callback) {
		makeRequest("getBidOrderIds", parms, "GET", callback);
	}

	this.getAskOrderIds = function (parms, callback) {
		makeRequest("getAskOrderIds", parms, "GET", callback);
	}

	this.getBidOrders = function (parms, callback) {
		makeRequest("getBidOrders", parms, "GET", callback);
	}

	this.getAskOrders = function (parms, callback) {
		makeRequest("getAskOrders", parms, "GET", callback);
	}

	this.getExpectedAskOrders = function (parms, callback) {
		makeRequest("getExpectedAskOrders", parms, "GET", callback);
	}

	this.getExpectedBidOrders = function (parms, callback) {
		makeRequest("getExpectedBidOrders", parms, "GET", callback);
	}

	this.getExpectedOrderCancellations = function (parms, callback) {
		makeRequest("getExpectedOrderCancellations", parms, "GET", callback);
	}

	this.getLastTrades = function (parms, callback) {
		makeRequest("getLastTrades", parms, "GET", callback);
	}

	this.getOrderTrades = function (parms, callback) {
		makeRequest("getOrderTrades", parms, "GET", callback);
	}

	this.getTrades = function (parms, callback) {
		makeRequest("getTrades", parms, "GET", callback);
	}

	this.searchAssets = function (parms, callback) {
		makeRequest("searchAssets", parms, "GET", callback);
	}

	this.getAssetDividends = function (parms, callback) {
		makeRequest("getAssetDividends", parms, "GET", callback);
	}

	this.issueAsset = function (parms, callback) {
		makeRequest("issueAsset", parms, "POST", callback);
	}

	this.placeBidOrder = function (parms, callback) {
		makeRequest("placeBidOrder", parms, "POST", callback);
	}

	this.placeAskOrder = function (parms, callback) {
		makeRequest("placeAskOrder", parms, "POST", callback);
	}

	this.transferAsset = function (parms, callback) {
		makeRequest("transferAsset", parms, "POST", callback);
	}

	/**
		Blocks
	**/

	this.getBlock = function (parms, callback) {
		makeRequest("getBlock", parms, "GET", callback);
	}

	this.getBlockId = function (parms, callback) {
		makeRequest("getBlockId", parms, "GET", callback);
	}

	this.getBlocks = function (parms, callback) {
		makeRequest("getBlocks", parms, "GET", callback);
	}

	/**
		Clinet
	**/

	this.getLightClientPing = function (parms, callback) {
		makeRequest("getLightClientPing", parms, "GET", callback);	
	}

	this.getStatistics = function (parms, callback) {
		makeRequest("getStatistics", parms, "GET", callback);	
	}

	this.getPeerState = function (parms, callback) {
		makeRequest("getPeerState", parms, "GET", callback);	
	}

	this.getTransactions = function (parms, callback) {
		makeRequest("getTransactions", parms, "GET", callback);	
	}

	this.getAccounts = function (parms, callback) {
		makeRequest("getAccounts", parms, "GET", callback);	
	}

	this.unsignedJSONtoBytes = function (parms, callback) {
		makeRequest("unsignedJSONtoBytes", parms, "POST", callback);
	}

	this.sendToken = function (parms, callback) {
		makeRequest("sendToken", parms, "POST", callback);
	}

	/**
		Contracts (AT)
	**/

	// :(

	/**
		Crowdfunding
	**/

	this.getAllCrowdfundings = function (parms, callback) {
		makeRequest("getAllCrowdfundings", parms, "GET", callback);	
	}

	/**
		Currencies
	**/

	this.getExpectedExchangeRequests = function (parms, callback) {
		makeRequest("getExpectedExchangeRequests", parms, "GET", callback);	
	}

	this.canDeleteCurrency = function (parms, callback) {
		makeRequest("canDeleteCurrency", parms, "GET", callback);	
	}

	this.getAllCurrencies = function (parms, callback) {
		makeRequest("getAllCurrencies", parms, "GET", callback);	
	}

	this.getAllExchanges = function (parms, callback) {
		makeRequest("getAllExchanges", parms, "GET", callback);	
	}

	this.getAvailableToBuy = function (parms, callback) {
		makeRequest("getAvailableToBuy", parms, "GET", callback);	
	}

	this.getAvailableToSell = function (parms, callback) {
		makeRequest("getAvailableToSell", parms, "GET", callback);	
	}

	this.getBuyOffers = function (parms, callback) {
		makeRequest("getBuyOffers", parms, "GET", callback);	
	}

	this.getSellOffers = function (parms, callback) {
		makeRequest("getSellOffers", parms, "GET", callback);	
	}

	this.getExpectedBuyOffers = function (parms, callback) {
		makeRequest("getExpectedBuyOffers", parms, "GET", callback);	
	}

	this.getExpectedSellOffers = function (parms, callback) {
		makeRequest("getExpectedSellOffers", parms, "GET", callback);	
	}

	this.getCurrency = function (parms, callback) {
		makeRequest("getCurrency", parms, "GET", callback);	
	}

	this.getCurrencies = function (parms, callback) {
		makeRequest("getCurrencies", parms, "GET", callback);	
	}

	this.getCurrencyFounders = function (parms, callback) {
		makeRequest("getCurrencyFounders", parms, "GET", callback);	
	}

	this.getCurrencyIds = function (parms, callback) {
		makeRequest("getCurrencyIds", parms, "GET", callback);	
	}

	this.getCurrenciesByIssuer = function (parms, callback) {
		makeRequest("getCurrenciesByIssuer", parms, "GET", callback);	
	}

	this.getCurrencyAccounts = function (parms, callback) {
		makeRequest("getCurrencyAccounts", parms, "GET", callback);	
	}

	this.getCurrencyAccountCount = function (parms, callback) {
		makeRequest("getCurrencyAccountCount", parms, "GET", callback);	
	}

	this.getCurrencyTransfers = function (parms, callback) {
		makeRequest("getCurrencyTransfers", parms, "GET", callback);	
	}

	this.getExpectedCurrencyTransfers = function (parms, callback) {
		makeRequest("getExpectedCurrencyTransfers", parms, "GET", callback);	
	}

	this.getExchanges = function (parms, callback) {
		makeRequest("getExchanges", parms, "GET", callback);	
	}

	this.getExchangesByExchangeRequest = function (parms, callback) {
		makeRequest("getExchangesByExchangeRequest", parms, "GET", callback);	
	}

	this.getExchangesByOffer = function (parms, callback) {
		makeRequest("getExchangesByOffer", parms, "GET", callback);	
	}

	this.getLastExchanges = function (parms, callback) {
		makeRequest("getLastExchanges", parms, "GET", callback);	
	}

	this.getOffer = function (parms, callback) {
		makeRequest("getOffer", parms, "GET", callback);	
	}

	this.searchCurrencies = function (parms, callback) {
		makeRequest("searchCurrencies", parms, "GET", callback);	
	}

	this.issueCurrency = function (parms, callback) {
		makeRequest("issueCurrency", parms, "POST", callback);
	}

	this.publishExchangeOffer = function (parms, callback) {
		makeRequest("publishExchangeOffer", parms, "POST", callback);
	}

	this.currencyBuy = function (parms, callback) {
		makeRequest("currencyBuy", parms, "POST", callback);
	}

	this.currencySell = function (parms, callback) {
		makeRequest("currencySell", parms, "POST", callback);
	}

	this.currencyReserveIncrease = function (parms, callback) {
		makeRequest("currencyReserveIncrease", parms, "POST", callback);
	}

	this.currencyReserveClaim = function (parms, callback) {
		makeRequest("currencyReserveClaim", parms, "POST", callback);
	}

	this.deleteCurrency = function (parms, callback) {
		makeRequest("deleteCurrency", parms, "POST", callback);
	}

	this.transferCurrency = function (parms, callback) {
		makeRequest("transferCurrency", parms, "POST", callback);
	}

	/**
		Debug
	**/

	this.fullReset = function (parms, callback) {
		makeRequest("fullReset", parms, "POST", callback);
	}

	this.RebroadcastUnconfirmedTransactions = function (parms, callback) {
		makeRequest("RebroadcastUnconfirmedTransactions", parms, "POST", callback);
	}

	this.requeueUnconfirmedTransactions = function (parms, callback) {
		makeRequest("requeueUnconfirmedTransactions", parms, "POST", callback);
	}

	this.shutdown = function (parms, callback) {
		makeRequest("shutdown", parms, "POST", callback);
	}

	this.trimDerivedTables = function (parms, callback) {
		makeRequest("trimDerivedTables", parms, "POST", callback);
	}

	this.clearUnconfirmedTransactions = function (parms, callback) {
		makeRequest("clearUnconfirmedTransactions", parms, "POST", callback);
	}

	this.luceneReindex = function (parms, callback) {
		makeRequest("luceneReindex", parms, "POST", callback);
	}

	this.scan = function (parms, callback) {
		makeRequest("scan", parms, "POST", callback);
	}

	this.GetAllBroadcastedTransactions = function(parms, callback) {
		makeRequest("GetAllBroadcastedTransactions", parms, "GET", callback);
	}

	this.getLog = function(parms, callback) {
		makeRequest("getLog", parms, "GET", callback);
	}

	this.getStackTraces = function(parms, callback) {
		makeRequest("getStackTraces", parms, "GET", callback);
	}

	/**
		Escrow
	**/

	this.sendMoneyEscrow = function(parms, callback) {
		makeRequest("sendMoneyEscrow", parms, "GET", callback);
	}

	this.escrowSign = function(parms, callback) {
		makeRequest("escrowSign", parms, "GET", callback);
	}

	this.getEscrowTransaction = function(parms, callback) {
		makeRequest("getEscrowTransaction", parms, "GET", callback);
	}

	this.getAccountEscrowTransactions = function(parms, callback) {
		makeRequest("getAccountEscrowTransactions", parms, "GET", callback);
	}

	/**
		Forging
	**/

	this.startForging = function (parms, callback) {
		makeRequest("startForging", parms, "POST", callback);
	}

	this.stopForging = function (parms, callback) {
		makeRequest("stopForging", parms, "POST", callback);
	}

	this.getForging = function (parms, callback) {
		makeRequest("getForging", parms, "POST", callback);
	}

	this.leaseBalance = function (parms, callback) {
		makeRequest("leaseBalance", parms, "POST", callback);
	}


	/**
		Gateways
	**/

	this.gatewayIpfs = function(parms, callback) {
		makeRequest("gatewayIpfs", parms, "GET", callback);
	}

	this.gatewayTenderMint = function(parms, callback) {
		makeRequest("gatewayTenderMint", parms, "GET", callback);
	}

	/**
		Hallmark
	**/

	this.decodeHallmark = function(parms, callback) {
		makeRequest("decodeHallmark", parms, "GET", callback);
	}

	this.markHost = function(parms, callback) {
		makeRequest("markHost", parms, "POST", callback);
	}

	/**
		Messages
	**/

	this.decryptFrom = function (parms, callback) {
		makeRequest("decryptFrom", parms, "GET", callback);
	}

	this.encryptTo = function (parms, callback) {
		makeRequest("encryptTo", parms, "GET", callback);
	}

	this.getSharedKey = function (parms, callback) {
		makeRequest("getSharedKey", parms, "GET", callback);
	}

	this.readMessage = function (parms, callback) {
		makeRequest("readMessage", parms, "GET", callback);
	}

	this.sendMessage = function (parms, callback) {
		makeRequest("sendMessage", parms, "GET", callback);
	}

	/**
		Networking
	**/

	this.getInboundPeers = function (parms, callback) {
		makeRequest("getInboundPeers", parms, "GET", callback);
	}

	this.getMyInfo = function (parms, callback) {
		makeRequest("getMyInfo", parms, "GET", callback);
	}

	this.getPeer = function (parms, callback) {
		makeRequest("getPeer", parms, "GET", callback);
	}

	this.getPeers = function (parms, callback) {
		makeRequest("getPeers", parms, "GET", callback);
	}

	this.dumpPeers = function (parms, callback) {
		makeRequest("dumpPeers", parms, "GET", callback);
	}

	this.addPeer = function (parms, callback) {
		makeRequest("addPeer", parms, "POST", callback);
	}

	this.blacklistPeer = function (parms, callback) {
		makeRequest("blacklistPeer", parms, "POST", callback);
	}

	/**
		Phasing
	**/

	this.getAccountPhasedTransactionCount = function (parms, callback) {
		makeRequest("getAccountPhasedTransactionCount", parms, "GET", callback);
	}

	this.getAccountPhasedTransactions = function (parms, callback) {
		makeRequest("getAccountPhasedTransactions", parms, "GET", callback);
	}

	this.getAssetPhasedTransactions = function (parms, callback) {
		makeRequest("getAssetPhasedTransactions", parms, "GET", callback);
	}

	this.getCurrencyPhasedTransactions = function (parms, callback) {
		makeRequest("getCurrencyPhasedTransactions", parms, "GET", callback);
	}

	this.getVoterPhasedTransactions = function (parms, callback) {
		makeRequest("getVoterPhasedTransactions", parms, "GET", callback);
	}

	this.getLinkedPhasedTransactions = function (parms, callback) {
		makeRequest("getLinkedPhasedTransactions", parms, "GET", callback);
	}

	this.getPhasingPoll = function (parms, callback) {
		makeRequest("getPhasingPoll", parms, "GET", callback);
	}

	this.getPhasingPollVote = function (parms, callback) {
		makeRequest("getPhasingPollVote", parms, "GET", callback);
	}

	this.getPhasingPolls = function (parms, callback) {
		makeRequest("getPhasingPolls", parms, "GET", callback);
	}

	this.getPhasingPollVotes = function (parms, callback) {
		makeRequest("getPhasingPollVotes", parms, "GET", callback);
	}

	this.approveTransaction = function (parms, callback) {
		makeRequest("approveTransaction", parms, "POST", callback);
	}

	/**
		Proxies
	**/

	this.proxyBitcoin = function (parms, callback) {
		makeRequest("proxyBitcoin", parms, "GET", callback);
	}

	this.proxyEthereum = function (parms, callback) {
		makeRequest("proxyEthereum", parms, "GET", callback);
	}

	this.proxyLiteCoin = function (parms, callback) {
		makeRequest("proxyLiteCoin", parms, "GET", callback);
	}

	this.proxyRipple = function (parms, callback) {
		makeRequest("proxyRipple", parms, "GET", callback);
	}

	this.proxyPoloniex = function (parms, callback) {
		makeRequest("proxyPoloniex", parms, "GET", callback);
	}


	/**
		Server
	**/

	this.getBlockchainStatus = function (parms, callback) {
		makeRequest("getBlockchainStatus", parms, "GET", callback);
	}

	this.getState = function (parms, callback) {
		makeRequest("getState", parms, "GET", callback);
	}

	this.getTime = function (parms, callback) {
		makeRequest("getTime", parms, "GET", callback);
	}

	this.eventRegister = function (parms, callback) {
		makeRequest("eventRegister", parms, "GET", callback);
	}

	this.eventWait = function (parms, callback) {
		makeRequest("eventWait", parms, "POST", callback);
	}

	/**
		Services
	**/

	this.getServices = function (parms, callback) {
		makeRequest("getServices", parms, "GET", callback);
	}

	/**
		Shuffling
	**/

	this.getAccountShufflings = function (parms, callback) {
		makeRequest("getAccountShufflings", parms, "GET", callback);
	}

	this.getAllShufflings = function (parms, callback) {
		makeRequest("getAllShufflings", parms, "GET", callback);
	}

	this.getAssignedShufflings = function (parms, callback) {
		makeRequest("getAssignedShufflings", parms, "GET", callback);
	}

	this.getHoldingShufflings = function (parms, callback) {
		makeRequest("getHoldingShufflings", parms, "GET", callback);
	}

	this.getShufflers = function (parms, callback) {
		makeRequest("getShufflers", parms, "GET", callback);
	}

	this.getShuffling = function (parms, callback) {
		makeRequest("getShuffling", parms, "GET", callback);
	}

	this.getShufflingParticipants = function (parms, callback) {
		makeRequest("getShufflingParticipants", parms, "GET", callback);
	}

	this.stopShuffler = function (parms, callback) {
		makeRequest("stopShuffler", parms, "GET", callback);
	}

	this.startShuffler = function (parms, callback) {
		makeRequest("startShuffler", parms, "GET", callback);
	}

	this.shufflingCancel = function (parms, callback) {
		makeRequest("shufflingCancel", parms, "GET", callback);
	}

	this.shufflingVerify = function (parms, callback) {
		makeRequest("shufflingVerify", parms, "GET", callback);
	}

	this.shufflingProcess = function (parms, callback) {
		makeRequest("shufflingProcess", parms, "GET", callback);
	}

	this.shufflingRegister = function (parms, callback) {
		makeRequest("shufflingRegister", parms, "GET", callback);
	}

	this.shufflingCreate = function (parms, callback) {
		makeRequest("shufflingCreate", parms, "GET", callback);
	}

	/**
		Storage
	**/

	this.storageMongoDb = function (parms, callback) {
		makeRequest("storageMongoDb", parms, "GET", callback);
	}

	this.storageRethinkDb = function (parms, callback) {
		makeRequest("storageRethinkDb", parms, "GET", callback);
	}

	this.storageMySqlDb = function (parms, callback) {
		makeRequest("storageMySqlDb", parms, "GET", callback);
	}

	/**
		Subscriptions
	**/

	this.sendMoneySubscription = function (parms, callback) {
		makeRequest("sendMoneySubscription", parms, "GET", callback);
	}

	this.subscriptionCancel = function (parms, callback) {
		makeRequest("subscriptionCancel", parms, "GET", callback);
	}

	this.getSubscription = function (parms, callback) {
		makeRequest("getSubscription", parms, "GET", callback);
	}

	this.getAccountSubscriptions = function (parms, callback) {
		makeRequest("getAccountSubscriptions", parms, "GET", callback);
	}

	this.getSubscriptionsToAccount = function (parms, callback) {
		makeRequest("getSubscriptionsToAccount", parms, "GET", callback);
	}

	/**
		Token
	**/

	this.decodeToken = function (parms, callback) {
		makeRequest("decodeToken", parms, "GET", callback);
	}

	this.generateFileToken = function (parms, callback) {
		makeRequest("generateFileToken", parms, "POST", callback);
	}

	this.generateToken = function (parms, callback) {
		makeRequest("generateToken", parms, "POST", callback);
	}

	this.decodeFileToken = function (parms, callback) {
		makeRequest("decodeFileToken", parms, "POST", callback);
	}

	/**
		Transactions
	**/

	this.getTransaction = function (parms, callback) {
		makeRequest("getTransaction", parms, "GET", callback);
	}

	this.broadcastTransaction = function (parms, callback) {
		makeRequest("broadcastTransaction", parms, "POST", callback);
	}

	this.calculateFullHash = function (parms, callback) {
		makeRequest("calculateFullHash", parms, "GET", callback);
	}

	this.getExpectedTransactions = function (parms, callback) {
		makeRequest("getExpectedTransactions", parms, "GET", callback);
	}

	this.getReferencingTransactions = function (parms, callback) {
		makeRequest("getReferencingTransactions", parms, "GET", callback);
	}

	this.getTransactionBytes = function (parms, callback) {
		makeRequest("getTransactionBytes", parms, "GET", callback);
	}

	this.parseTransaction = function (parms, callback) {
		makeRequest("parseTransaction", parms, "GET", callback);
	}

	this.signTransaction = function (parms, callback) {
		makeRequest("signTransaction", parms, "GET", callback);
	}

	/**
		Utilities
	**/

	this.encodeQRCode = function (parms, callback) {
		makeRequest("encodeQRCode", parms, "POST", callback);
	}

	this.decodeQRCode = function (parms, callback) {
		makeRequest("decodeQRCode", parms, "POST", callback);
	}

	this.fullHashToId = function (parms, callback) {
		makeRequest("fullHashToId", parms, "GET", callback);
	}

	this.longConvert = function (parms, callback) {
		makeRequest("longConvert", parms, "GET", callback);
	}

	this.hexConvert = function (parms, callback) {
		makeRequest("hexConvert", parms, "GET", callback);
	}

	this.rsConvert = function (parms, callback) {
		makeRequest("rsConvert", parms, "GET", callback);
	}

	this.hash = function (parms, callback) {
		makeRequest("hash", parms, "GET", callback);
	}

	/**
		Voting
	**/

	this.castVote = function (parms, callback) {
		makeRequest("castVote", parms, "POST", callback);
	}

	this.createPoll = function (parms, callback) {
		makeRequest("createPoll", parms, "POST", callback);
	}

	this.getPoll = function (parms, callback) {
		makeRequest("getPoll", parms, "GET", callback);
	}

	this.getAllPolls = function (parms, callback) {
		makeRequest("getAllPolls", parms, "GET", callback);
	}

	this.getPollResult = function (parms, callback) {
		makeRequest("getPollResult", parms, "GET", callback);
	}

	this.getPollVotes = function (parms, callback) {
		makeRequest("getPollVotes", parms, "GET", callback);
	}

	this.getPollVote = function (parms, callback) {
		makeRequest("getPollVote", parms, "GET", callback);
	}

	this.getPolls = function (parms, callback) {
		makeRequest("getPolls", parms, "GET", callback);
	}

	this.searchPolls = function (parms, callback) {
		makeRequest("searchPolls", parms, "GET", callback);
	}


};

module.exports = InfinityEconomicsNode;