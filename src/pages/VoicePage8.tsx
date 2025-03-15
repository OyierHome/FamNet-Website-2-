import voice8 from "../Assets/voice8.png";
import logo from "../Assets/logo.png";
import logo3 from "../assets/logo3.png"
import right1 from "../assets/right1.png";
import pin  from  "../assets/pin.png"
import right2 from "../assets/right2.png";
import plybtn from "../assets/plybtn.png"

const VoicePage8 = () => {
  return (
    <>
    
        <div className="p-5 top-[180px] font-Inter text-base md:text-xl text-start md:ml-30 lg:ml-30">
        <h2 className="font-bold text-[#FDBD26] text-2xl md:text-3xl lg:text-[36px] leading-[150%]">
        
          Voice of Farmers</h2>
      
          <p className=" mt-2 font-inter font-normal text-lg md:text-[32px]  leading-[120%] "> 
        
          Stay informed with insights and innovation sin Agriculture
          </p>
       
       
      </div>
      <div className="bg-white hidden sm:block">

      <div className="flex items-center ml-35  w-[1080px] h-[622px] rounded-[5px]  mx-auto  justify-center relative bg-[#2E453D]">
      <div className="relative">
          
          <img
            src={voice8}
            alt="service11"
            className="w-[375px] h-[542px] rounded-[10px]  mt-6 md:mt-4 mb-6 md:mb-2"
          />
           <img src={logo3} className="absolute bottom-39 left-2 w-[61px] h-[61px]" alt="logo" />
           <div className="absolute bottom-18 md:bottom-14 left-4 md:left-4 text-left">
            <h2 className="text-white md:text-[20px] font-bold md:mt-0 mt-4">
            Planning & management
            </h2>
            <p className="text-white md:text-[18px] font-inter md:mt-0 mt-4">
            Farmnet has improved my productivity by linking me with service provides & <br />resources
            </p>
          </div>
          <div className=" flex justify-between mt-8 items-center absolute bottom-8 left-0">
        <img src={pin} className="ml-3 mt-18 w-[21px] h-[21px]" />
        <h1 className="text-white text-[18px] mt-18 ml-3">
        Walvis bay, Namibia
        </h1>
        <img src={right1} className="ml-32 mt-18 w-[12px] h-[12px]" />
      </div>
</div>

        
          <img
    src={logo}
    alt="service11"
    className="absolute left-6 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
  />
    <h2 className="absolute left-6 bottom-8  font-inter font-bold text-[40px] leading-[120%] tracking-[0%] align-middle text-white">Productivity</h2>
   </div>

</div>
      <div className=" block sm:hidden w-full">
    
        <div className="flex items-center justify-center w-[280px] h-[180px] rounded-[5px] ml-6 relative bg-[#2E453D] ">
  <div className="relative  ">
   
    <img className="w-[107px] h-[160px] object-cover rounded-md" src={voice8} alt="farmervoice" />
                
                {/* Play Button */}
                <img src={plybtn} className="w-[28px] h-[31px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="play button" />
                
                {/* Logo */}
                <img src={logo3} className="absolute  bottom-15  left-1 w-[19px] h-[18px]" alt="logo" />
                
                {/* Location */}
                <div className="absolute bottom-0 left-1 flex items-center text-white text-sm">
                  <img src={pin} className="w-[6px] h-[6px] mr-1" alt="pin" />
                 
                  <span className="text-[6px] ml-1">Walvis bay, Namibia</span>
                  <img src={right2} className="w-[8px] h-[8px] mb-2 ml-6 mt-2" alt="right" />
                </div>
                
                {/* Title & Description */}
                <div className="absolute bottom-4 left-1 text-white">
                  <h1 className=" text-[8px] mt-4  font-bold" > Planning & management</h1>
                  <p className=" text-[6px] ">  Farmnet has improved my productivity by linking me with service provides & <br />resources</p>
      </div></div>
       <img
    src={logo}
    alt="service11"
    className="absolute left-1 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
  />
    <h2 className="absolute left-2 bottom-2  text-[10px] text-white">Productivity</h2>

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




        </>
  )
}

export default VoicePage8
