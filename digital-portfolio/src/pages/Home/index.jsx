
import Boysicon from "../../Components/Boysicons";
import Navbar from "../../Components/Navbar"
import { Box } from "@mui/material";
import boysbacg from "../../assets/hero-bg.png"
import Itworks from "../../Components/Itworks";
import Ourworks from "../../Components/Ourworks";
import Footer from "../../Components/Footer";
const Home = () => {
  return (
    <>

<div style={{ fontFamily: 'Open Sans, sans-serif' }}>

        <Box className="boysbacgcolor" sx={{ backgroundColor: " #201142",backgroundRepeat:"no-repeat", backgroundImage: `url(${boysbacg})`, height: "135em", width: "100%" }} >
        <Navbar />
          <Boysicon />
   

   

          <Itworks />
          <Ourworks />
      </Box>
  
   
      <Footer />
</div>
    </>
  )
}

export default Home