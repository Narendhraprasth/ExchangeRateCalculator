import React from 'react'
import { Box,Typography,TextField,Menu,MenuItem } from '@mui/material'




function CurrencySymbols() {
  return (
    <Box my={10}>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>Enter Base Currency</Typography>
            <TextField label="Enter Currency" defaultValue="USD" />
            
            


        </Box>

    </Box>
  )
}

export default CurrencySymbols