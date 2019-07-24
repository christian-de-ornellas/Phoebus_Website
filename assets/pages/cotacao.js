const start = window.onload = function () {
	getCoin()
}
/*
	@SimulationCotation
	1. DEFAULT: CHL for BRL
	2. OPTION: CHL for USD
	3. OPTION: CHL for EUR

*/
function SimulationCotation() {

	const Cotation = {
		coinStart: document.getElementById("coinStart").value,
		coinConvert: null,
		coinStart: document.getElementById("coinStart").value,
		coinConvert: document.getElementById("coinConvert").value
	}

	if (Cotation.coinStart != "") {
		let coinCotation = 3.87
		const coinConvert = Cotation.coinStart.replace(',', '.') * coinCotation
		const getConverted = document.getElementById("coinConvert").value = coinConvert.toFixed(2)
	}

	console.log(Cotation)

}

function getCoin() {

	//https://economia.awesomeapi.com.br/jsonp/EUR-BRL

	const phoebus_api = "http://58a07b26.ngrok.io/api/coins"
	axios.get(`${phoebus_api}`)
		.then(function (response) {
			let api_coins = response.data
			for (i = 0; i < api_coins.length; i++)
				console.log(`Moeda: ${api_coins[i].coin} | Cotação: ${api_coins[i].cotation}`)
		})

}

