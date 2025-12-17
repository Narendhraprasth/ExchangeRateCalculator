import React from 'react'
import { AppBar, Box, Typography } from '@mui/material'

function NavBar() {
  return (
    <Box>
        <AppBar position='fixed'>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>
                Currency Conversion
            </Typography>

            </Box>
            

        </AppBar>
    </Box>
  )
}

export default NavBar