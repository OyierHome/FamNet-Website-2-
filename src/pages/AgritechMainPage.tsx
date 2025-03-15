
import left from "../assets/left.png";

import agri1 from "../assets/agri1.png";
import agri2 from "../assets/agri2.png";
import agri3 from "../assets/agri3.png";
import agri4 from "../assets/agri4.png";
import right1 from "../assets/right1.png";

import logo1 from "../assets/logo1.png";  
import { IoIosArrowDown } from "react-icons/io";
;


export default function AgritechMainPage() {  const blogPosts = [
    {
      id: 1,
   
   
      image: agri1,
    },
    {
      id: 2,
    
      image: agri2,
    },
    {
      id: 3,
     
      image: agri3,
    },
    {
      id: 4,
   
      image: agri4,
    },
  ];

  return (
    <>
      <section className="bg-white ml-8">
       
          <div className="font-inter mb-20 items-center justify-center bg-white px-2 md:px-8 lg:px-16">
  {/* Title Section */}
  <div className=" mb-2 px-2 flex justify-between items-start">
        <h1 className="text-[#FDBD26] mt-22 left-[38px] md:mt-20 md:ml-9 ml-2 lg:ml-9 text-[11px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
        AgriTech
        </h1>
        <IoIosArrowDown className="md:h-[34px] md:w-[34px] w-[12px] h-[12px] md:mr-22 md:mt-25 mr-2 mt-22" />
      </div>
   
    
      <div className="w-full relative overflow-hidden flex flex-col items-start text-left text-white font-inter mb-8"></div>
<p className="font-inter  text-black font-normal ml-4 lg:ml-11 md:ml-11 mt-2 text-[11px] md:text-[32px] leading-[120%] tracking-[0%]">

      Agritech, or agricultural technology, refers to the application of <br className="hidden md:block" />technological innovations
      to improve and enhance agricultural<br className="block md:hidden" /> practices. It <br className="hidden md:block" /> is aimed at increasing productivity,
      sustainability,<br className="block md:hidden" /> and efficiency in farming <br className="hidden md:block" /> and food production.
    </p>




          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 ml-2 md:ml-12">
  {blogPosts.map((post) => (
    <div key={post.id} className="flex flex-col items-start w-full">
      
      {/* ✅ Title & Logo in Same Line */}
      <div className="flex flex-col items-start w-full">
        <img src={logo1} alt="Logo" className="md:w-12 md:h-12 w-[13px] h-[13px] self-end" />
        <h2 className="font-bold text-gray-800 text-[10px] md:text-[32px] mt-1 sm:font-bold ">
        Revolutionizing Agriculture with<br className="hidden md:block" /> Digital solutions
        </h2>
      </div>

      <p className="mt-2 text-sm text-black font-inter text-[10px] md:text-[32px]">Stay informed with insights and <br className="hidden md:block" />innovations in Agriculture</p>

      <div className="relative">
        <img
          className="mt-4 object-cover w-full sm:w-[160px] sm:h-[106px]  md:w-[538px]  md:h-[305px] rounded-md"
          src={post.image}
          alt=""
        />

        {/* ✅ Read More Button Responsive */}
        <div className="absolute top-4 left-0 bg-[#152C24]  w-[50%] h-[20%]   p-3 md:p-6  md:w-[136px]  md:h-[7px] rounded-br-[30px] md:rounded-br-[50px]">
          <button className="absolute top-[0px] left-[3px] text-[6px] flex items-center justify-between p-2 w-[80%] md:w-[116px] h-[10px] md:h-[24px] whitespace-nowrap md:text-[14px] font-semibold text-gray-700 bg-[#D2F34A] border rounded-full">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right w-[20px] h-[17px] ml-2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        {/* ✅ Navigation Buttons Fixed */}
        <div className="absolute bottom-0 right-0 bg-[#152C24] p-3  w-[60%] h-[20%] md:p-6 flex items-center gap-6 md:gap-12 md:w-[236px]  md:h-[7px] rounded-tl-[30px] md:rounded-tl-[50px]">
          <button className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]  flex items-center justify-center bg-[#D2F34A] rounded-full">
            <img src={left} className="w-[3px] md:w-[4px] h-[6px] md:h-[8px]" alt="Previous" />
          </button>
          <button className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px]   flex items-center justify-center bg-[#054413] rounded-full">
            <img src={right1} className="w-[3px] md:w-[4px] h-[6px] md:h-[8px]" alt="Next" />
          </button>
        </div>

      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
}
