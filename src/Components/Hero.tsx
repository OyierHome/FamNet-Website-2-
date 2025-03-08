
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


      {/* Header Section */}
      <div className="px-4 flex justify-between items-center">
        <h1 className="text-2xl ml-20  md:text-[48px] text-[#FDBD26] font-bold md:mt-2">
          AgriTech
        </h1>
        <img
          src={logo2}
          className="w-[71px] sm:w-[60px] md:w-[71px] lg:w-[70px] xl:w-[80px] h-auto text-[#919291] absolute sm:right-[20%] md:right-[10%]"
          alt="Logo"
        />
      </div>

      {/* Slider Section */}
      <div className="relative font-Inter">
        <Slider ref={sliderRef} {...settings} className="px-2">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Text Content */}
              <div className="text-center md:text-left px-4 ml-18  ">
                <h2 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-[120%]">
                  Revolutionizing Agriculture with Digital <br className="hidden sm:block" /> Solutions
                </h2>
                <h2 className="text-lg sm:text-xl md:text-[32px] text-white leading-[120%]">
                  Stay informed with insights and innovations in Agriculture
                </h2>
              </div>

              {/* Image */}
              <div className="relative" >
      <img
        src={slide.image}
        className="w-[1157px] ml-22 h-[622px] mb-4 sm:h-[400px] mt-2 md:w-[1157] md:h-[622px]  rounded-md"
      />
      <div
        className="absolute  top-0 bg-[#152C24] p-6"
        style={{
          width: "353px",
          height: "76px",
        
          borderBottomRightRadius: "50px",
        }}
      >
       {/* <button className="absolute top-[10px] left-[3px] text-start p-2 w-[250px] h-[50px] text-lg font-semibold text-gray-700 bg-[#D2F34A] mb-8 border rounded-md ">
    See More
  </button> */}
   <button className=" absolute top-[10px] left-[63px] ml-6 flex items-center justify-between p-2 w-[229px] h-[49px] text-lg font-semibold text-gray-700 bg-[#D2F34A] border rounded-md">
    See More
    <img src={right} alt="Arrow" className="w-[8.5px] h-[17px] ml-2" />
  </button>
      </div>

                {/* Navigation Arrows */}
                <div
  className="absolute bottom-0 right-0 bg-[#152C24] p-6 flex items-center gap-12 "
  style={{
    width: "293px",
    height: "76px",
    borderTopLeftRadius: "50px",
  }}>
                <button
  className="w-15 h-15 flex items-center justify-center text-white bg-[#D2F34A] rounded-full mt-4"
  onClick={() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }}
>
  <img src={left} className="w-[8.5px] h-[17px]" alt="Previous" />
</button><button
  className="w-15 h-15 flex items-center justify-center text-white bg-[#054413] rounded-full mt-4"
  onClick={() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }}
>
  <img src={right1} className="w-[8.5px] h-[17px]" alt="Next" />
</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Partner Logos Section */}
      <div className="mb-6 mt-8 px-4 md:px-7">
        <p className="text-[20px] ml-16 text-white sm:text-[24px] md:text-[32px] font-inter leading-[120%]">
          Partners supporting farmers
        </p>
      </div>
      {/* <div className="max-w-screen-xl ml-20 mx-auto mt-4 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-20">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logocloud1} alt="" className="h-[69px] w-[205.03px] object-contain" />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logocloud2} alt="" className="h-[80px] w-[80px]" />
          </div>
          <div className="flex items-center justify-center  col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logocloud3} alt="" className="h-[79px] w-[207px]" />
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logocloud4} alt="" className="h-[70px] w-[212px]" />
          </div>
        </div>
      </div> */}
  <div className="max-w-screen-xl mx-auto mt-4 mb-6">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
    <div className="flex items-center sm:ml-20">
      <img src={logocloud1} alt="" className="h-20 w-52 object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud2} alt="" className="h-20 w-20 object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud3} alt="" className="h-20 w-52 object-contain" />
    </div>
    <div className="flex items-center">
      <img src={logocloud4} alt="" className="h-20 w-52 object-contain" />
    </div>
  </div>
</div>
</div>


    </>
  );
};

export default Hero;
