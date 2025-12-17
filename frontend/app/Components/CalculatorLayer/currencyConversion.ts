import parseExpression from "./parseRegex";
import calculateCurrency from "./calculateCurrency";
import type { TokenInterface, ExchangeRates } from "./types";

export const currencyConversion = async (
  userInput: string,
  exchangeRates: ExchangeRates,
  baseCurrency: string
): Promise<{resultingAmount:number,resultingCurrency:string}> => {
  const tokens: TokenInterface[] = parseExpression(userInput);

  const resultingAmount: number = calculateCurrency(tokens, exchangeRates);

  return {
    resultingAmount,resultingCurrency:baseCurrency.toUpperCase()
  }
};
