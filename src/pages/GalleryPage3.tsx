import Gallery1 from "../assets/gallery1.png";
import { IoIosArrowDown } from "react-icons/io";

const GalleryPage3 = () => {
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
       {
        id: 7,
   
       
        image: Gallery1,
      },
      {
        id: 8,
      
        image: Gallery1,
      },
      {
        id: 9,
       
        image: Gallery1,
      },
      {
        id: 10,
     
        image: Gallery1,
      },
      {
        id: 11,
       
        image: Gallery1,
      },
      {
        id: 12,
     
        image: Gallery1,
      },
     ];
     return (
<>
 <div className="mb-4 px-6 md:ml-28 flex justify-between items-center">
  <h1 className="text-2xl md:text-[32px] font-bold mt-1 md:mt-4">
  History
  </h1>


  <IoIosArrowDown className="w-[33px] h-[23px] text-[#33363F] mr-22" /> </div>
  
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
     )}
     export default GalleryPage3