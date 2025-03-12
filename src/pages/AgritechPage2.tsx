import left from "../assets/left.png";
import right from "../assets/right.png";
import agritech2 from "../assets/agritech2.png";
import right1 from "../assets/right1.png";

const AgritechPage2 = () => {
  return (
    <>
        <div className="font-inter mb-20 items-center justify-center bg-white px-4 md:px-8 lg:px-16">
        {/* Heading Section */}
        <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-left text-white font-inter mb-8">
          <h2 className="text-[#FDBD26] mt-9 md:ml-18 lg:ml-18 text-[24px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
            AgriTech
          </h2>

          <h2 className="text-black text-[24px] md:ml-18 lg:ml-18 md:text-[36px] font-bold leading-[150%] mt-2 md:mt-4">
            Revolutionizing Agriculture with Digital Solutions
          </h2>
        </div>

        {/* Image Section */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="relative md:ml-18 lg:ml-18 w-full max-w-[1157px]">
            <img
              src={agritech2}
              className="w-full h-auto sm:h-[400px] md:w-[1157px] md:h-[622px] rounded-md"
              alt="Agritech"
            />

            {/* Read More Button */}
            <div className="absolute top-0 left-0 bg-[#152C24] w-[30%] h-[20%] sm:w-[293px] md:h-[76px] rounded-br-[30px] md:rounded-br-[50px] flex items-center">
              <button className="ml-1 md:ml-6 flex items-center  sm:text-sm  h-[10px] sm-ml-0 justify-between p-2 md:w-[180px] w-[90px] md:h-[49px] lg:h-[49px] text-[10px] md:text-[20px] font-semibold text-gray-700 bg-[#D2F34A] border rounded-md">
                Read More
                <img src={right} alt="Arrow" className="w-[3px] md:w-[8.5px] h-[6px] md:h-[17px] ml-2" />
              </button>
   

            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 right-0  bg-[#152C24] p-4 md:p-6 flex items-center gap-6 md:gap-12 w-[30%] h-[20%] sm:w-[293px] md:h-[76px]  rounded-tl-[30px] md:rounded-tl-[50px]">
              <button className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center bg-[#D2F34A] rounded-full">
                <img src={left} className="w-[6px] md:w-[8.5px] h-[11px] md:h-[17px]" alt="Previous" />
              </button>
              <button className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center bg-[#054413] rounded-full">
                <img src={right1} className="w-[8px] md:w-[8.5px] h-[14px] md:h-[17px]" alt="Next" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-2 sm:px-4 md:px-10 font-inter text-left">
          <h2 className="text-xl sm:text-2xl md:text-[40px] md:ml-10 lg:ml-10 font-bold mb-6 text-start md:text-left">
            Stay informed with insights and innovation
          </h2>

          <div className="font-inter font-normal 10 lg:ml-10 text-[18px] md:text-[38px] leading-[150%] tracking-[0%]">
            <p>
            Revolutionizing agriculture with digital solutions refers to<br/> the use of advanced technologies, software, and data-<br/>driven tools to transform traditional farming practices into<br/> more efficient, productive, and sustainable systems. Digital <br/>solutions in agriculture integrate innovations like big data,<br/> artificial intelligence (AI), the Internet of Things (IoT),<br/> machine learning, and automation to modernize every <br/>aspect of farming, from crop production to livestock<br/> management.

            </p>
            <p className="mt-12">
              Here’s a closer look at how digital solutions are revolutionizing agriculture:
            </p>
            <ul className="list-inside list-decimal">
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
      </div>
    </>
  )
}

export default AgritechPage2
