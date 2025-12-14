import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import ApiUrl from "./CurrencyApi";
import parseExpression from "./MatchRegex";

function CurrencySymbols() {
  const [result, setResult] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const GetCurrencyApi = async () => {
    try {
      const response = await ApiUrl.get(`/latest/USD`);
      setResult(response.data.conversion_rates);
    } catch (err) {
      console.error(err);
    }
  };
  const CalculateCurrencies = ({expr, rates}) => {
    const tokens = parseExpression(expr);
    let total = 0;

    for (const t of tokens) {
      const usdValue = t.amount / rates[t.currency];
      total += t.sign * usdValue;
    }
    return(
        <Box>
            <Typography>{parseFloat(total).toFixed(2)} USD</Typography>
        </Box>
    )
  };

  return (
    <Box my={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Enter Currency Calculation
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField label="Enter Values" onChange={handleChange} />
          <Button variant="contained" onClick={GetCurrencyApi}>
            Click
          </Button>
        </Box>
        <Box>
          {result && (
            <CalculateCurrencies expr={value} rates={result} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CurrencySymbols;
