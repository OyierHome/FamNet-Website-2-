import { useEffect } from "react";
import Hero from "../Components/Hero";

const HomePage = () => {
  
        useEffect(() => {
          document.body.style.backgroundColor = '#152C24';
          return () => {
            document.body.style.backgroundColor = '#ffffff';
          };
        }, []);
      
return(
<>


<Hero />




</>
)}

export default HomePage;
