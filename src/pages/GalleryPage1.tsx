import { CiSearch } from "react-icons/ci";
import calender from "../../assets/calender.png";
import { IoIosArrowDown } from "react-icons/io";
import Gallery1 from "../../assets/gallery1.png";
const GalleryPage1 = () => {
   const blogPosts = [
      {
        id: 1,
   
       
        image: Gallery1,
      },
      {
        id: 2,
      
        image: Gallery1,
      },
      {
        id: 3,
       
        image: Gallery1,
      },
      {
        id: 4,
     
        image: Gallery1,
      },
      {
        id: 5,
       
        image: Gallery1,
      },
      {
        id: 6,
     
        image: Gallery1,
      },
    ];
  
  return (
<>
<div className="p-5 top-[180px] font-Inter text-base md:text-xl text-start md:ml-30 lg:ml-30">
            <h2 className="font-bold text-[#FDBD26] text-2xl md:text-3xl lg:text-[36px] leading-[150%]">
            Gallery
            </h2>
            <p className="text-black text-[12px] lg:text-[32px]   md:text-[32px] leading-[150%] mt-2 md:mt-2">
            Follow the activities of Farmers Networks and read the history of Farmnet App
          </p>
       
            </div>
            <div className="flex flex-col gap-4 lg:flex-row items-center  md:mb-6">
        {/* Search Input */}
        <div className="w-full mb-2 lg:mb-0">
          <div className="relative">
          <input
  type="text"
  placeholder="Search"
  className="md:w-[1100px] w-[264px]  h-[33px] md:h-[62px] md:ml-35 ml-4 text-[#919291] md:text-[18px] font-bold md:p-3 p-1 pr-4 pl-2 md:pr-6 md:pl-4 border border-[#C4C4C4] rounded-md focus:outline-none"
/>

            <CiSearch 
              className="absolute md:right-6 top-1/2 md:mr-29   transform -translate-y-1/2 text-[#33363F]"
              size={30}
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl ml-6  md:text-[20px] md:ml-35 lg:text-[20px] leading-[150%]">
      Dates
            </h2>
            <div className="flex items-center justify-start md:ml-34 ml-2 md:mt-2 space-x-6">
            <div className="flex space-x-2 items-center">
            <img
                src={calender}
                alt="calender"
                className="w-[33px] h-[32px]"
              />
              <h1 className="font-inter md:text-[14px] ">From</h1>
             
            </div>
            <div className="flex  space-x-2 items-center">
            <img
                src={calender}
                alt="calender"
                className="w-[33px] h-[32px]"
              />
              <h1 className="font-inter md:text-[14px]">TO</h1>
              
            </div>
           
          </div>
          
   <div className="mb-4 px-6 md:ml-28 flex justify-between items-center">
  <h1 className="text-2xl md:text-[32px] font-bold mt-1 md:mt-4">
  General
  </h1>
  <div className=" relative  flex justify-end md:gap-1 md:mr-25" >
  <button className="text-[#919291]  text-md md:text-[20px] leading-[120%] cursor-pointer">View More</button>

  <IoIosArrowDown className="w-[33px] h-[23px] text-[#33363F]" /> </div>
  </div>
  <section className="bg-white ml-8">
       
          <div className="font-inter mb-20 items-center justify-center bg-white px-4 md:px-8 lg:px-16">




          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 ml-2 md:ml-10 mr-10">
  {blogPosts.map((post) => (
    <div key={post.id} className="flex flex-col items-start w-full">
      
      {/* ✅ Title & Logo in Same Line */}
      

      
      <div className="relative">
        <img
          className="mt-4 object-cover w-full sm:w-[180px] sm:h-[106px]  md:w-[577.96px]  md:h-[385px] rounded-md"
          src={post.image}
          alt="market"
        />
         <h2 className="font-bold text-gray-800 md:mt-6 text-[10px] md:text-[16px] mt-1 sm:font-bold ">
         March 03, 2025
        </h2>
         <h2 className="font-bold text-gray-800 text-[10px] md:text-[32px] md:mt-2 mt-1 sm:font-bold ">
         Market Access
        </h2>
<p className="mt-2 text-sm text-black font-inter md:mt-2 text-[10px] md:text-[32px]">Market access is a critical element of successful farming</p>
      </div>
      </div>
  ))}
</div>

        </div>
      </section> 

        
</>
  )
}

export default GalleryPage1