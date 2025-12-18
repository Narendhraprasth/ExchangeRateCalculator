import type { TokenInterface } from "./types";

const parseRegex = (expr: string): TokenInterface[] => {
  const regex: RegExp = /([+-]?)(\d+(?:\.\d+)?)([A-Z]{3})/g;
  const tokens: TokenInterface[] = [];
  expr = expr.toUpperCase().replaceAll(" ", "");

  let match: RegExpExecArray | null;
  while ((match = regex.exec(expr)) !== null) {
    tokens.push({
      sign: match[1] === "-" ? -1 : 1,
      amount: parseFloat(match[2]),
      currency: match[3],
    });
  }

  return tokens;
};


export default parseRegex;
