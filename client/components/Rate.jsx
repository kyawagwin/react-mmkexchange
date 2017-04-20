import React from 'react';

export default class Rate extends React.Component {
	render() {
		const exchangeRate = {  
			"_id":"58f8bf1db228550011f985f9",
			"baseCurrency":"MMK",
			"__v":0,
			"rateTimestamp":1492696800,
			"rates": {
				"THB":39.396446440531065,
				"TWD":44.57718539651406,
				"MYR":307.9765937788728,
				"MMK":1,
				"ZAR":102.85949393128986,
				"BRL":431.0344827586207,
				"RUB":24.04944566027753,
				"INR":20.95293969743955,
				"KRW":1.1914307534488942,
				"NOK":157.92798483891346,
				"HKD":174.1856819369448,
				"SGD":969.9321047526673,
				"NZD":949.6676163342831,
				"MXN":71.99424046076314,
				"SEK":151.4463122822959,
				"CNY":196.811651249754,
				"CHF":1360.544217687075,
				"CAD":1004.0160642570282,
				"AUD":1019.3679918450559,
				"GBP":1736.111111111111,
				"JPY":12.419276256740718,
				"EUR":1457.725947521866,
				"USD":1355.0135501355012
			}
		};

		/*
		promises testing
		const getRates = new Promise(function(resolve, reject) {  
			let rateArr = [];

			for (var rate in exchangeRate.rates) {
				if (exchangeRate.rates.hasOwnProperty(rate)) {
					rateArr.push({
						"currency" : rate,
						"rate": exchangeRate.rates[rate]
					});
					//console.log(rate + " -> " + exchangeRate.rates[rate]);
				}
			}

			if (rateArr.length > 0) {
				resolve(rateArr);  // fulfilled successfully
			}
			else {
				reject("Exchange rates not fouond!");  // error, rejected
			}
		});

		getRates.then((data) => {
			console.log(data);
		}).catch((err) => {
			rates = err;
		});

		*/

		return (
			<div className="ui horizontal list">
				<div className="item">
					<img className="ui country image" src="" />
					<div className="content">
						<a className="header">USD</a>
						<div className="description">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore alias provident quasi itaque harum non autem officia facere, nobis! Nobis recusandae ab placeat voluptas beatae dignissimos architecto. Tempora, molestiae, impedit!
						</div>	
					</div> 
				</div>
			</div>
		);
	}
}