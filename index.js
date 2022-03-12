function showData(stockData) {
	const fatherEl = document.querySelector('.content');

	function createEl(data) {
		const tickerEl = document.createElement('h2');
		tickerEl.className = 'content-ticker';
		tickerEl.textContent = data.ticker;

		const priceEl = document.createElement('span');
		priceEl.className = 'content-price';
		priceEl.textContent = '$' + data.price;

		const volumeEl = document.createElement('span');
		volumeEl.className = 'content-volume';
		volumeEl.textContent = 'Volume: ' + data.volume;

		const percentageEl = document.createElement('span');
		percentageEl.className = 'content-percentage';
		percentageEl.textContent = 'Change: ' + data.percentage;

		fatherEl.appendChild(tickerEl);
		fatherEl.appendChild(priceEl);
		fatherEl.appendChild(volumeEl);
		fatherEl.appendChild(percentageEl);
	}

	createEl(stockData);
}

function fetchData(stockTicker) {
	const apikey = '8W95GOURNU6RIZKW';
	const ticker = stockTicker;
	const data = fetch(
		'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' +
			ticker +
			'&apikey=' +
			apikey
	);

	data
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			const obj = 'Global Quote';
			const tickerProp = '01. symbol';
			const priceProp = '05. price';
			const volumeProp = '06. volume';
			const percentageProp = '10. change percent';
			const price = res[obj][priceProp];
			const volume = res[obj][volumeProp];
			const percentage = res[obj][percentageProp];
			const ticker = res[obj][tickerProp];
			// console.log(res);
			// console.log({
			// 	ticker: ticker,
			// 	price: price,
			// 	volume: volume,
			// 	percentage: percentage,
			// });
			showData({
				ticker: ticker,
				price: price,
				volume: volume,
				percentage: percentage,
			});
		});
}
function search() {
	const form = document.querySelector('.form');
	const event = form.addEventListener('submit', (evento) => {
		evento.preventDefault();
		let searchedWord = document.querySelector('.text-input').value;
		return fetchData(searchedWord);
	});
}

function main() {
	search();
}

main();
