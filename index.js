function showData(stockData) {}

function fetchData(stockTicker) {
  const apikey = "8W95GOURNU6RIZKW";
  const ticker = stockTicker;
  const data = fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
      ticker +
      "&apikey=" +
      apikey
  );

  data
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const obj = "Global Quote";
      const priceProp = "05. price";
      const volumeProp = "06. volume";
      const percentageProp = "10. change percent";

      const price = res[obj][priceProp];
      const volume = res[obj][volumeProp];
      const percentage = res[obj][percentageProp];

      return { price: price, volume: volume, percentage: percentage };
    });
}
function search() {
  const form = document.querySelector(".form");
  const event = form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let searchedWord = document.querySelector(".text-input").value;
    return fetchData(searchedWord);
  });
}

function main() {
  search();
}

main();
