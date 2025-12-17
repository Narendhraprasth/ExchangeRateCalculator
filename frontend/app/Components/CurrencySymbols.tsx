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
import type { ExchangeRates } from "./CalculatorLayer/types";
import { currencyConversion } from "./CalculatorLayer/currencyConversion";

function CurrencySymbols() {
  const [result, setResult] = useState<ExchangeRates | null>(null);
  const [value, setValue] = useState<string>("");
  const [output, setOutput] = useState<{
    resultingAmount: number;
    resultingCurrency: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const GetCurrencyApi = async () => {
    try {
      const response = await ApiUrl.get(`/latest/USD`);
      const exchangeRates = response.data.conversion_rates as ExchangeRates;
      setResult(exchangeRates);

      const res = await currencyConversion(value, exchangeRates, "USD");
      setOutput(res);
    } catch (err) {
      console.error(err);
      setOutput(null);
    }
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
          <TextField
            label="Enter Values"
            value={value}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={GetCurrencyApi}>
            Click
          </Button>
        </Box>
        <Box>
          {output && (
            <Typography variant="h6">
              {output.resultingAmount.toFixed(2)} {output.resultingCurrency}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CurrencySymbols;
