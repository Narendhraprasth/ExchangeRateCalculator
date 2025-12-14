// A FUNCTION TO MATCH STRING BY REGEX AND THEN SEND IT AS TOKENS.
const parseExpression = (expr) => {
  const regex = /([+-]?)(\d+(?:\.\d)?)([A-Z]{3})/g;
  const tokens = [];
  expr = expr.toUpperCase()
  expr = expr.replaceAll(" ","")


  let match;
  while ((match = regex.exec(expr)) !== null) {
    tokens.push({
      sign: match[1] === "-" ? -1 : 1,
      amount: parseFloat(match[2]),
      currency: match[3],
    });
  }
  return tokens;
};



export default parseExpression;
