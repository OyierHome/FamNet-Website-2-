import chat from "../assets/chat.png";
import feature from "../assets/feature.png";
import feature1 from "../assets/feature1.png";
const Feature = () => {
  return (
   <> <div >
       <div className="hidden sm:block">
       <div className="  bg-white  min-h-screen w-full m-0 p-0  font-Inter">
        
       <div className="font-Inter mb-10 overflow-x-hidden">
      {/* Text Section */}
      <div className="flex flex-col px-6 md:px-8 ml-16  mt-9 sm:flex-row justify-between items-start sm:items-center">
  <div>
    <h1 className="text-[#FDBD26] text-3xl md:text-[40px] mt-4 font-bold">
      Agritech
    </h1>
    <h1 className="text-2xl md:text-[40px] font-bold mt-0"> {/* Added mt-0 here */}
      The future of Agriculture.
    </h1>
  </div>

<div className="flex items-center justify-between gap-2 sm:mt-0">
  {/* Buttons */}
  <div className="flex items-center gap-2">
    <div className="inline-flex items-center justify-center px-4 py-2.5 text-sm text-black rounded-lg shadow bg-[#E7EBEB]">
      <span className="mx-2">Talk to me</span>
    </div>
    <div className="inline-flex items-center justify-center px-4 py-2.5 text-sm text-black rounded-lg shadow bg-[#E7EBEB]">
      <span className="mx-2">How can I help you</span>
    </div>
  </div>

  {/* Chatbot Image */}
  <img
    src={chat}
    alt="servicerobot"
    className="h-8 md:h-[83px] w-8 md:w-[83px]"
  />
</div></div></div>
      <div className="flex flex-col lg:flex-row ml-16  items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 md:pl-10">
          <img
            src={feature}
            alt="Agriculture in Namibia"
            className="rounded-sm w-[626px] md:h-[417px] lg:w-full"
          />
        </div>
        
       
        <div className="lg:w-1/2 ml-2 ">
        <h1 className="text-[22px] md:text-[40px] font-bold mb-3 md:mb-3">
        Have you registered as a Farmer?
          </h1>
          <p className="mt-6  font-inter font-normal text-2xl leading-[120%] tracking-normal align-middle">

          Registering as a Farmer offers several <br />benefits for farmers:<br /> </p>
         <p className="mt-6  font-inter font-normal text-2xl leading-[120%] tracking-normal align-middle">
Efficient Farm Management: The app helps<br /> farmers track crops & livestock, manage <br />inventory, planning, and schedule tasks, <br />streamlining daily operations.<br />
</p>
<p className="mt-6 font-inter font-normal text-2xl leading-[120%] tracking-normal align-middle">
Expert Advice: Farmers can access timely and<br />accurate agricultural advice,....
          </p>
          
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="block sm:hidden w-full ">
    <div className="  bg-white  min-h-screen w-full m-0 p-0  font-Inter">
    <div className="flex items-center w-full">
    {/* Text Section */}
    <div className="text-left flex-1">
      <h2 className="text-black font-bold text-[12px] ml-2 whitespace-nowrap">
      Agri-Tech , The future of Agriculture.
      </h2>
     
    </div>

    {/* Logo Fully Right */}
    <img
      src={chat}
      className="w-[31px] h-[31px] text-[#919291] ml-auto mt-2 mr-2 top-0"
      alt="Logo"
    />
  </div>
  <div className="flex ml-4 mt-8 items-center justify-between">
  <div className="w-1/2   ">
          <img
            src={feature1}
            alt="Agriculture in Namibia"
            className="rounded-sm w-[195px] h-[130px] "
          />
        </div>
        
       
        <div className="w-1/2 ml-2 ">
        <h1 className="text-[10px]  font-bold mb-3 md:mb-3">
        Stay informed with insights <br/>and innovations in Agriculture
          </h1>
          <p className=" font-inter font-normal text-[7px] leading-[120%] tracking-normal align-middle">

          Smart farming refers to the use of advanced technology and data-driven solutions to optimize agricultural practices. It aims to improve the efficiency, productivity, and sustainability of farming by integrating modern technologies like sensors, data analytics, automation, and the Internet of Things (IoT) </p>
    </div>
    </div>
    </div>
    </div>
    </> 
  )
}

export default Feature
