// import { Welcome } from "../welcome/welcome";
import { AppBar, Box } from "@mui/material";
import CurrencyCalculator from '../Components/CurrencyCalculator'
import NavBar from "../Components/NavBar"

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Box  sx={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center'}}>
      <NavBar />
      <CurrencyCalculator />
    </Box>
  );
}
