import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import ApiUrl from "./CurrencyApi";

function CurrencySymbols() {
  const [currency, setCurrency] = useState("USD");
  const [field, setField] = useState(1);
  const [result,setResult] = useState(null);
  

  

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  
  const GetCurrencyApi = async () => {
    try {
      const response = await ApiUrl.get(`/latest/${currency}`);
      setResult(response.data.conversion_rates)
      
    } catch (err) {
      console.error(err);
    }
  };
  if(result){
    console.log(result.conversion_rates)
  }
  

  return (
    <Box my={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Enter Base Currency
        </Typography>
        <TextField
          label="Enter Currency"
          value={currency}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={GetCurrencyApi}>Click</Button>

      </Box>
      {result && (
        <Box>
            <pre>{JSON.stringify(result,null,2)}</pre>
        </Box>
      )}
    </Box>
  );
}

export default CurrencySymbols;
