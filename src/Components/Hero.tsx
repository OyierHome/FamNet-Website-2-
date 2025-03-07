
import right1 from '../assets/right1.png'
import agritech1 from "../assets/agritech1.png";
import agritech2 from "../assets/agritech2.png";
import agritech3 from "../assets/agritech3.png";
import logo2 from '../assets/logo2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import left from '../assets/left.png'
import right from '../assets/right.png'
import logocloud1 from '../assets/logocloud1.png'
import logocloud2 from '../assets/logocloud2.png'
import logocloud3 from '../assets/logocloud3.png'
import logocloud4 from '../assets/logocloud4.png'

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    centerMode: true,
    centerPadding: "0",
  };

  const slides = [
    {
      image: agritech1,
    
     
    },
    {
      image: agritech2,
    
    
    },
    {
      image: agritech3,
    
    
    },
  
  ];

 

  return (
    <>
     <div className="px-4 flex justify-between items-center ">
  <h1 className="text-2xl ml-2 md:text-[48px] text-[#FDBD26] font-bold mt-3 md:mt-6">
  AgriTech
  </h1>
  <img 
  src={logo2} 
  className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[80px] xl:w-[100px] 
             h-auto text-[#919291] absolute  sm:right-[20%] md:right-[10%] leading-[120%]"
/>


       
     
</div>
 
 
    <div className="relative font-Inter ">
      {/* Main Slider */}
      <Slider ref={sliderRef} {...settings} className="px-2">
  {slides.map((slide, index) => (
    <>
        <div className="flex flex-col items-start space-y-2 px-4">
      <h2 className="text-white font-bold  text-2xl text-[22px] md:text-[54px] leading-[120%]">  Revolutionizing Agriculture with Digital <br />solutions</h2>
  <h2 className="text-[20px] text-white sm:text-[24px] md:text-[32px] font-inter leading-[120%] ">    Stay informed with insights and innovations in Agriculture</h2>
</div>
    <div className="relative" key={index}>
      <img
        src={slide.image}
        className="w-[1157] ml-3 h-[622px] sm:h-[400px] mt-2 md:w-[1157] md:h-[622px] object-cover rounded-md"
      />
      <div
        className="absolute  top-0 bg-[#152C24] p-6"
        style={{
          width: "293px",
          height: "76px",
        
          borderBottomRightRadius: "50px",
        }}
      >
       {/* <button className="absolute top-[10px] left-[3px] text-start p-2 w-[250px] h-[50px] text-lg font-semibold text-gray-700 bg-[#D2F34A] mb-8 border rounded-md ">
    See More
  </button> */}
   <button className=" absolute top-[10px] left-[3px] ml-2 flex items-center justify-between p-2 w-[250px] h-[50px] text-lg font-semibold text-gray-700 bg-[#D2F34A] border rounded-md">
    See More
    <img src={right} alt="Arrow" className="w-5 h-5 ml-2" />
  </button>
      </div>
      <div
        className="absolute bottom-0 right-0 bg-[#152C24] p-6"
        style={{
          width: "293px",
          height: "76px",
          borderTopLeftRadius: "50px",
        }}
      >
         <div className="inline-block p-3 text-white bg-[#D2F34A]  rounded-full">
         <img src={left} className ="object-cover w-6 h-6 rounded-full " alt=""/>
                </div>
      &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;
                <div className="inline-block p-3 text-white bg-[#054413]  rounded-full">
         <img src={right1} className ="object-cover w-7 h-7 rounded-full bg-[#054413]" alt=""/>
                </div>
      </div>
     
    </div>
     
            </>
   
  ))}

</Slider>

<div className="mb-6 mt-8 px-4 md:px-7">
       <p className=" text-[20px] text-white sm:text-[24px] md:text-[32px] font-inter leading-[120%] ">
      
       Partners  supporting farmers
       </p>
     </div>
     <div className="max-w-screen-xl ml-3 mx-auto mt-4 mb-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                 <img src={logocloud1} alt="" />
                 
                 </div>

                 <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                 <img src={logocloud2} alt="" />
                 
                 </div>
                 <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                 <img src={logocloud3} alt="" />
                 
                 </div>
                 <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                 <img src={logocloud4} alt="" />
                 
                 </div>
               

            </div></div> 
   


     
            
             
            </div></>
  )}

export default Hero
