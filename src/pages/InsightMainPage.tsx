import down from "../assets/down.png";
import insight1 from "../assets/insight1.png";
import insight2 from "../assets/insight2.png";
import insight3 from "../assets/insight3.png";
import insight4 from "../assets/insight4.png";
import insight5 from "../assets/insight5.png";
import insight6 from "../assets/insight6.png";





const blogPosts = [
  {
    id: 1,
  
    image: insight1,
  },
  { id: 2,  image: insight2, linkPath: "/" },
  { id: 3,  image: insight3,linkPath: "/" },
  { id: 4,  image:insight4, linkPath: "/", },
 
  { id: 5, image: insight5,linkPath: "/" },
  { id: 6,  image: insight6,linkPath: "/" },
]
 
const InsightMainPage = () => {
  return (
    <div>
         
      <div className="   flex justify-between items-center">
        <h1 className="text-[#FDBD26] mt-5 ml-2 md:ml-35 lg:ml-35 text-[24px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
        Insights & Innovations
        </h1>
        <img src={down} className="h-[27px] w-[27px] md:mr-42 lg:mr-42 mr-4 mt-4 " alt="down-icon" />
      </div>
      <p className="text-[23px] lg:text-[33px] md:text-[33px] font-inter leading-[120%] md:ml-35 lg:ml-35 ml-2 tracking-[0%]  mt-4">
        Smart farming refers to the use of advanced technology and data-driven <br className="hidden md:block" /> solutions to optimize agricultural practices. It aims to improve the <br className="hidden md:block" /> efficiency, productivity, and sustainability of farming by integrating <br className="hidden md:block" /> modern technologies like sensors, data analytics, automation, and the <br className="hidden md:block" /> Internet of Things (IoT)</p>
        <div className="hidden sm:block">
        
        <div className="grid grid-cols-3 gap-4 ml-4 md:ml-35 mr-35 mt-5 mb-4">
  {blogPosts.map((post) => (
    <div key={post.id} className="flex flex-col items-start w-full">
      <div className="relative">
        <img
          className="mt-4 w-full max-w-[329px] h-[180px] md:h-[396px] lg:h-[396px] rounded-md"
          src={post.image}
          alt="farmervoice"
        />
        <button className="absolute top-6 left-1 md:ml-4 flex items-center sm:text-xs md:text-sm justify-between p-1 md:p-2 md:w-[180px] md:h-[27px] lg:h-[33px] font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
          Technology & Innovation
        </button>
      </div>
      <div className="p-2">
        <p className="text-[#979797] text-xs sm:text-sm">March 03, 2025</p>
        <h2 className="font-bold text-xs md:text-[18px] lg:text-[20px]">
          How High Precision Farming is Changing Agriculture
        </h2>
        <p className="font-inter text-xs sm:text-sm md:text-[16px] lg:text-[16px]">
          Smart farming uses technology such as mobile applications to improve production.
        </p>
      </div>
    </div>
  ))}
</div>
</div>
<div className="block sm:hidden w-full">
<div className="grid grid-cols-3 ml-4  ">
{blogPosts.map((post) => (
    <div key={post.id} className="flex flex-col items-start w-full">
      <div className="relative">
        <img
          className="mt-4  gap-2  w-[240px] h-[160px]  rounded-md mr-1 ml-0"
          src={post.image}
          alt="farmervoice"
        />
          <button className="absolute top-6 left-1  flex items-center text-[6px] md:text-sm justify-between p-1 md:p-2   font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
          Technology & Innovation
        </button>
        </div>
        <div className="p-2">
        <p className="text-[#979797] text-[8px] ">March 03, 2025</p>
        <h2 className="font-bold text-[8px] ">
          How High Precision Farming is Changing Agriculture
        </h2>
        <p className="font-inter text-[10px] ">
          Smart farming uses technology such as mobile applications to improve production.
        </p>
      </div>
    </div>
       
  ))}
  </div>
  </div>

     </div>
  )
}

export default InsightMainPage
