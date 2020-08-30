prices = [9, 11, 8, 4, 7, 10, 3, 8]
console.log('input:', prices)

function buy_and_sell () {
  let bestProfit = 0
  let currentProfit = 0
  let bestBuy = prices[0]
  let bestSell = prices[0]

  for (i = 0; i < prices.length; i++) {
    priceNow = prices[i]

    if (priceNow > bestSell) {
      bestSell = priceNow
    } else {
      bestBuy = priceNow
      bestSell = priceNow
    }

    currentProfit = bestSell - bestBuy

    if (currentProfit > bestProfit) {
      bestProfit = currentProfit
    }
  }

  return bestProfit
}

res = buy_and_sell()

console.log('output:', res)
