import innovation1 from "../../assets/innovation1.png"
import logo from "../../assets/logo.png";

const InsightPage1 = () => {
  return (
    <div><div className="p-5 top-[180px] font-Inter text-base md:text-xl text-start md:ml-30 lg:ml-30">
    <h2 className="font-bold text-[#FDBD26] text-2xl md:text-3xl lg:text-[36px] leading-[150%]">
    
    Insights & Innovations</h2>
  
    
   
   
  </div>
  <div className="bg-white hidden sm:block">

  <div className="flex items-center ml-35  w-[1080px] h-[622px] rounded-[5px]  mx-auto  justify-center relative bg-[#2E453D]">
  <div className="relative">
      
      <img
        src={innovation1}
        alt="service11"
        className="w-[450px] h-[539px] rounded-[10px]  mt-6 md:mt-4 mb-6 md:mb-2"
      />
      
      <button className="absolute top-12 left-1 md:ml-2 flex items-center sm:text-xs md:text-sm justify-between p-1 md:p-2 md:w-[244px] md:h-[50px] lg:h-[50px] font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
          Technology & Innovation
        </button>
    
      </div>
    
      <img
src={logo}
alt="service11"
className="absolute left-6 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
/>



</div>
  

 


</div>
<div className=" block sm:hidden w-full">
    
    <div className="flex items-center justify-center w-[280px] h-[180px] rounded-[5px] ml-6 relative bg-[#2E453D] ">
<div className="relative  ">
    
<img className="w-[107px] h-[160px] object-cover rounded-md" src={innovation1} alt="farmervoice" />
<button className="absolute top-2 ml-1 flex items-center justify-between px-2 py-1 w-[90px] h-[20px] text-[6px] font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
Technology & Innovation
   
  </button>
</div>
<img
    src={logo}
    alt="service11"
    className="absolute left-3 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
  />
</div>
</div>

  <div className="p-4 md:p-6 top-[105px] font-inter text-base md:text-xl">
{/* Quote Section */}
<p className="text-[18px] md:text-[40px] text-start md:text-left leading-[150%] md:ml-28">
“Using Farmnet to access good service providers, I have
<br className="hidden md:block" /> been able to get the right support to improve my production.“
</p>

{/* Heading */}
<h2 className="font-bold mt-4 text-[20px] md:text-[40px] text-start md:text-left leading-[120%] md:ml-28">
Productivity Solution:
</h2>

{/* Description */}
<p className="mt-2 text-[16px] md:text-[40px] text-start md:text-left leading-[150%] md:ml-28">
Farmnet connects farmers with verified service providers
<br className="hidden md:block" /> who offer timely, accurate advice and expert guidance.
<br className="hidden md:block" /> This enables farmers to make informed decisions and
<br className="hidden md:block" /> enhance their production, leading to improved efficiency and productivity.
</p>
</div>

</div>
  )
}

export default InsightPage1