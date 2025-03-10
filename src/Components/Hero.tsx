
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import right1 from "../assets/right1.png";
import agritech1 from "../assets/agritech1.png";
import agritech2 from "../assets/agritech2.png";
import agritech3 from "../assets/agritech3.png";
import logo2 from "../assets/logo2.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import logocloud1 from "../assets/logocloud1.png";
import logocloud2 from "../assets/logocloud2.png";
import logocloud3 from "../assets/logocloud3.png";
import logocloud4 from "../assets/logocloud4.png";

const Hero = () => {
  const sliderRef = useRef<Slider | null>(null);

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
    { image: agritech1 },
    { image: agritech2 },
    { image: agritech3 },
  ];

  return (
    <>
    <div className="bg-[#152C24] min-h-screen w-full">


    <div className="px-4 flex justify-between items-center relative">
  {/* Title - Hidden on Small Screens */}
  <h1 className="hidden sm:block text-3xl md:text-[48px] text-[#FDBD26] font-bold md:mt-2 ml-4 md:ml-22">
    AgriTech
  </h1>

  {/* Logo - Moves to Right on Small Screens */}
  <img
    src={logo2}
    className=" hidden sm:block  w-[50px] sm:w-[60px] md:w-[71px] lg:w-[70px] xl:w-[80px] h-auto   text-[#919291] ml-auto sm:mr-6 md:mr-10"
    alt="Logo"
  />
</div>



<div className="relative font-Inter">
  <Slider ref={sliderRef} {...settings} className="px-2">
    {slides.map((slide, index) => (
      <div key={index} className="relative flex flex-col items-center">
        {/* ✅ Large Screens (Desktop) */}
        <div className="hidden sm:block">
          {/* Text Content */}
          <div className="text-start md:text-left px-4 md:ml-10 lg:ml-20">
            
            <h2 className="text-white font-bold text-lg sm:text-sm md:text-4xl lg:text-5xl flex items-center gap-2">
              Revolutionizing Agriculture with Digital
              <br className="hidden sm:block" /> Solutions
            </h2>

            <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-white mt-2 leading-snug">
              Stay informed with insights and innovations in Agriculture
            </h2>
          </div>

          {/* Image + Controls */}
          <div className="relative">
            <img
              src={slide.image}
              className="w-[1157px] ml-22 h-[622px] mb-4 sm:h-[400px] mt-2 md:w-[1157px] md:h-[622px] rounded-md"
            />

            {/* "See More" Button */}
            <div className="absolute top-0 bg-[#152C24] p-6 w-[353px] h-[76px] rounded-br-[50px]">
              <button className="absolute top-[10px] left-[63px] ml-6 flex items-center justify-between p-2 w-[229px] h-[49px] text-lg font-semibold text-gray-700 bg-[#D2F34A] border rounded-md">
                See More
                <img src={right} alt="Arrow" className="w-[8.5px] h-[17px] ml-2" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div
              className="absolute bottom-0 right-0 bg-[#152C24] p-6 flex items-center gap-12 w-[293px] h-[76px] rounded-tl-[50px]"
            >
              <button
                className="w-12 h-12 flex items-center justify-center bg-[#D2F34A] rounded-full"
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <img src={left} className="w-[8.5px] h-[17px]" alt="Previous" />
              </button>
              <button
                className="w-12 h-12 flex items-center justify-center bg-[#054413] rounded-full"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <img src={right1} className="w-[8.5px] h-[17px]" alt="Next" />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Small Screens (Mobile) */}
        <div className="block sm:hidden w-full">
          {/* Image */}
        

          {/* Mobile Text Content */}

          <div className="text-center px-4 mt-4">
  {/* Flex container for text and logo */}
  <div className="flex items-center w-full">
    {/* Text Section */}
    <div className="text-left flex-1">
      <h2 className="text-white font-bold text-sm whitespace-nowrap">
        Revolutionizing Agriculture with
      </h2>
      <h2 className="text-white font-bold text-sm sm:text-lg">
        Digital Solutions
      </h2>
    </div>

    {/* Logo Fully Right */}
    <img
      src={logo2}
      className="w-[60px] h-[50px] text-[#919291] ml-auto top-0"
      alt="Logo"
    />
  </div>

  {/* Additional Text Section */}
  <h2 className="text-xs text-start  text-white mt-2">
    Stay informed with insights and innovations in Agriculture
  </h2>
</div>
          <div className="relative ml-3">
          <img src={slide.image} className="w-[344px] h-[185px]  mx-auto rounded-md mt-4" alt="Slide" />

            {/* "See More" Button */}
            <div className="absolute top-0 bg-[#D9D9D9] w-[101px] h-[34px] rounded-br-[10px] flex items-center justify-center">
  <button className="flex items-center justify-between px-2 py-1 w-[90px] h-[20px] text-[12px] font-semibold text-gray-700 bg-[#D2F34A] border rounded-md">
    See More
    <img src={right} alt="Arrow" className="w-[3px] h-[6px] ml-2" />
  </button>
</div>

       
           
            <div className="absolute bottom-0 right-0 bg-[#152C24] p-2 flex items-center gap-2 rounded-tl-[10px] sm:gap-4">
  <button
    className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] flex items-center justify-center bg-[#D2F34A] rounded-full"
    onClick={() => sliderRef.current?.slickPrev()}
  >
    <img src={left} className="w-[8px] h-[16px] sm:w-[10px] sm:h-[20px]" alt="Previous" />
  </button>
  <button
    className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] flex items-center justify-center bg-[#054413] rounded-full"
    onClick={() => sliderRef.current?.slickNext()}
  >
    <img src={right1} className="w-[8px] h-[16px] sm:w-[10px] sm:h-[20px]" alt="Next" />
  </button>
</div>
            </div>
       
        </div>
      </div>
    ))}
  </Slider>
</div>


   
      <div className=" mt-2 px-4 md:px-7">
  <p className="text-[20px] text-white sm:text-[24px] md:text-[32px] sm:text-start font-inter leading-[120%] ml-0 sm:ml-16">
    <span className="block sm:hidden">Partners</span> 
    <span className="hidden sm:block">Partners supporting farmers</span> 
  </p>
</div>

    
  <div className="max-w-screen-xl mx-auto ml-2 mt-2 ">
  <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-10 justify-items-center">
    <div className="flex items-center sm:ml-20">
      <img src={logocloud1} alt="" className="h-20 w-52 object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud2} alt="" className="h-20 w-52 object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud3} alt="" className="h-20 w-52  object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud4} alt="" className="h-20 w-52   object-contain" />
    </div>
  </div>
</div>
</div>


    </>
  );
};

export default Hero;
