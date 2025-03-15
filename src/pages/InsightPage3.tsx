import innovation3 from "../assets/innovation3.png"
import logo from "../assets/logo.png";

const InsightPage3 = () => {
  return (
    <div><div className="p-5 top-[180px] font-Inter text-base md:text-xl text-start md:ml-30 lg:ml-30">
      <h2 className="font-bold text-[#FDBD26] text-2xl md:text-3xl lg:text-[36px] leading-[150%]">

        Insights & Innovations</h2>




    </div>
      <div className="bg-white hidden sm:block">

        <div className="flex items-center ml-35  w-[1080px] h-[622px] rounded-[5px]  mx-auto  justify-center relative bg-[#2E453D]">
          <div className="relative">

            <img
              src={innovation3}
              alt="service11"
              className="w-[450px] h-[539px] rounded-[10px]  mt-6 md:mt-4 mb-6 md:mb-2"
            />

            <button className="absolute top-12 left-1 md:ml-2 flex items-center sm:text-xs md:text-sm justify-between p-1 md:p-2 md:w-[244px] md:h-[50px] lg:h-[50px] font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
              Technology & Innovation
            </button>

          </div>

          <img
            src={logo}
            alt="service11"
            className="absolute left-6 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
          />



        </div>





      </div>
      <div className=" block sm:hidden w-full">

        <div className="flex items-center justify-center w-[280px] h-[180px] rounded-[5px] ml-6 relative bg-[#2E453D] ">
          <div className="relative  ">

            <img className="w-[107px] h-[160px] object-cover rounded-md" src={innovation3} alt="farmervoice" />
            <button className="absolute top-2 ml-1 flex items-center justify-between px-2 py-1 w-[90px] h-[20px] text-[6px] font-semibold text-white bg-[#114918] border-[#114918] border rounded-md">
              Technology & Innovation

            </button>
          </div>
          <img
            src={logo}
            alt="service11"
            className="absolute left-3 top-2 w-[50px] sm:w-[98px] md:w-[208px] h-auto"
          />
        </div>
      </div>

      <div className="p-4 md:p-6 top-[105px] font-inter text-base md:text-xl">
        {/* Quote Section */}

        <p className="text-[#979797] text-[18px] md:text-[32px] text-start md:text-left leading-[150%] md:ml-29">March 03, 2025</p>
        <h2 className="text-[18px] md:text-[40px] text-start md:text-left leading-[150%] md:ml-29.5 font-bold ">
          How High Presicision Farming is changing agriculture
        </h2>

        {/* Heading */}


        {/* Description */}
        <p className="mt-2 text-[16px] md:text-[40px] font-inter text-start md:text-left leading-[150%] md:ml-30">
          Revolutionizing agriculture with digital solutions refers to <br className="hidden md:block" />
          the use of advanced technologies, software, and data-<br className="hidden md:block" />
          driven tools to transform traditional farming practices into<br className="hidden md:block" />
          more efficient, productive, and sustainable systems. Digital
          <br className="hidden md:block" /> solutions in agriculture integrate innovations like big data,<br className="hidden md:block" />
          artificial intelligence (AI), the Internet of Things (IoT), <br className="hidden md:block" />
          machine learning, and automation to modernize every <br className="hidden md:block" />
          aspect of farming, from crop production to livestock <br className="hidden md:block" />
          management.
          <br className="hidden md:block" />
        </p>
        <p className=" text-[16px] md:text-[40px] mt-4 text-start md:text-left leading-[150%] md:ml-30">

        Here’s a closer look at how digital solutions are  <br className="hidden md:block" />revolutionizing agriculture:
        </p>
        <ul className="list-inside list-decimal text-[16px] md:text-[40px] mt-4 text-start md:text-left leading-[150%] md:ml-30">
           <li className="mt-12">
            Data-Driven Decision Making
             <br />Big Data and Analytics: Farmers now have access to vast amounts of data, including weather patterns, soil conditions, and market trends. By analyzing this data, they can make informed decisions about planting, watering, fertilizing, and harvesting, improving yields and reducing waste
             <br />Predictive Analytics: Advanced algorithms predict outcomes like crop yield, pest outbreaks, or weather disruptions, helping farmers take proactive steps rather than reactive ones
           </li>
           <li>
           Precision Agriculture
             <br /> GPS Technology: GPS-enabled tractors and machinery can plant seeds, apply fertilizers, and harvest crops with incredible precision, reducing waste and optimizing resource use.  <br />
 Drones and Satellites: Drones and satellite imagery help farmers monitor crop health, detect diseases, and identify nutrient deficiencies in real time, allowing for targeted interventions.  <br />
 Variable Rate Technology (VRT): VRT helps apply water, fertilizers, and pesticides only where needed in specific quantities, reducing overuse and improving crop health.
           </li>
           <li>
            Automation and Robotics
            <br /> Autonomous Machinery: Tractors, harvesters, and other farming equipment can operate autonomously, performing tasks like plowing, planting, and harvesting with little to no human intervention
             <br />   Robotic Harvesters: Robots are being developed to pick fruits and vegetables, reducing labor costs and increasing efficiency, especially for crops that require delicate handling.
          </li>
           <li>
           Internet of Things (IoT)
             <br />Smart Sensors: IoT devices ca
           </li>
         </ul>
      </div>

    </div>
  )
}

export default InsightPage3