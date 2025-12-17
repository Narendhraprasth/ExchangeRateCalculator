import type { ExchangeRates,TokenInterface } from "./types";

// This function takes two inputs one is the user's input and another one is conversion rates from the api
const calculateCurrency = (tokens: TokenInterface[], rates: ExchangeRates): number => {

  let total: number = 0;

  for (const t of tokens) {
    const rate = rates[t.currency];

    if (rate === undefined) {
      throw new Error(`Missing exchange rate for ${t.currency}`);
    }

    const usdValue: number = t.amount / rate;
    total += t.sign * usdValue;

    
  }
  total = Math.abs(total)
  return Number(total.toFixed(2));
};

export default calculateCurrency;