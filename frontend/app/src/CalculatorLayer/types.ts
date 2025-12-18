export interface TokenInterface {
  sign: number;
  amount: number;
  currency: string;
}

export type ExchangeRates = Record<string, number>;
