import chat from '../assets/chat.png'
import feature from '../assets/feature.png'
const Feature = () => {
  return (
    <div className="bg-white mt-2">
      <section className="bg-white">
    <div className="container px-6 py-10 mx-auto">
   <div className="px-4 flex justify-between items-center ">
  <h1 className="text-2xl ml-2 md:text-[48px] text-[#FDBD26] font-bold mt-3 md:mt-6">
  AgriTech
  </h1>
  <img 
  src={chat} 
  className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[80px] xl:w-[100px] 
             h-auto text-[#919291] absolute  sm:right-[20%] md:right-[10%] leading-[120%]"
/>


       
     
</div>

       <h2 className="text-black ml-5 font-bold  text-2xl text-[22px] md:text-[54px] leading-[120%]">
      
    
       The future of Agriculture.
       </h2>
    

        <div className="mt-8 lg:-mx-4 lg:flex lg:items-center">
            <img className="object-cover w-[626px] lg:mx-6 lg:w-1/2 rounded-xl h-[417px] lg:h-96" src={feature} alt=""/>

            <div className="mt-0 lg:w-1/2 lg:mt-0 flex flex-col items-start ">
               

                <h2   className=" text-black font-bold  text-2xl text-[22px] md:text-[40px] leading-[120%]">
                Have you registered as a Farmer?
                </h2>

                <p className="mt-3 text-[24px] text-black  md:text-[24p]">
                Registering as a Farmer offers several benefits for farmers
                </p>

                <p className="inline-block mt-2 md:text-[24p]">Efficient Farm Management: The app helps farmers track crops & livestock, manage inventory, planning, and schedule tasks, streamlining daily operations</p>

                <p className="flex items-center mt-6 md:text-[24p]">
                Expert Advice: Farmers can access timely and accurate agricultural advice,

                    
                </p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Feature
