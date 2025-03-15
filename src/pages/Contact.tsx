import { IoIosArrowDown } from "react-icons/io";
import email from "../assets/image (13).png"

import chat from "../assets/chat.png"

const Contact = () => {
  return (
    <div>
      
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="lg:w-3/4 ">
          <form className="space-y-6">


                    <div className=" pl-2">
            <h1 className="font-bold text-2xl lg:ml-25  md:ml-25 md:text-[54px]  mb-4 whitespace-nowrap">
               Contact Our team
             </h1>
             <p className="mb-4 md:text-[32px] lg:text-[32px] lg:ml-25  md:ml-25 whitespace-nowrap">
               Got any questions about our services, we are<br className="hidden md:block" /> here to help. Chat with our team 24/7 for help
            </p>
            </div>
              {/* Name and Surname */}
              <div className="flex flex-col md:flex-row space-x-2 lg:ml-25  md:ml-25 mb-4">
            
                <div>
                  <label className="block text-sm md:text-[24px] font-inter mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    className="w-full md:w-[362px] md:h-[74px] border-[1px] p-2 rounded placeholder:font-inter placeholder:text-[36px] placeholder-[#979797] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-[24px] font-inter mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter surname"
                    className="w-full md:w-[362px] md:h-[74px] border-[1px] p-2 rounded placeholder-[#979797] placeholder:font-inter placeholder:text-[36px] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium"
                  />
                </div>
              </div>

              <div className="mb-4 lg:ml-25  md:ml-25">
                <label className="block text-sm md:text-[24px] font-inter mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex items-center w-full md:w-[739px] md:h-[73px] border-[1px] p-2 rounded placeholder-[#979797] placeholder:font-inter placeholder:text-[36px] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium" />



              </div>



              <div className="mb-4 lg:ml-25 md:ml-25">
                <label className="block text-sm md:text-[24px] font-inter mb-2">
                  Phone number
                </label>
                <div className="flex items-center w-full md:w-[739px] bg-[#152C24] md:h-[73px]   rounded placeholder-[#979797] placeholder:font-inter placeholder:text-[36px] border-[#979797]  text-[24px] font-medium">

                  <button className=" md:text-[38px] md:w-[98px] md:h-[64px] font-medium text-white rounded-md bg-[#152C24] ">ZA</button>
                  <IoIosArrowDown className="w-[33px] h-[23px] text-white mr-6" />
                  <input className="flex items-center w-full md:w-[739px] md:h-[73px] border-[1px] p-2 rounded placeholder-[#979797] placeholder:font-inter placeholder:text-[36px] border-[#979797] bg-[#F3F5F5] text-[24px] font-medium" type="text" name="tel" placeholder="+276475XXXXX" />

                </div>
              </div>


              <div className="mb-4 lg:ml-25  md:ml-25">
                <label className="block text-sm md:text-[24px] font-inter mb-2">
                  Message
                </label>
                <textarea id="message" name="message"
                  placeholder="Send us a message" className="w-full bg-white rounded placeholder:text-[36px] border-[1px] border-[#979797]  h-32 text-base py-1 px-3 "></textarea>



              </div>
              <div>
                <h1 className="font-bold text-2xl lg:ml-25  md:ml-25 md:text-[24px]  mb-4">
                  Services
                </h1>
              </div>




              <div className="w-full relative space-y-5">
                <div className="flex gap-x-6 lg:ml-25  md:ml-25">
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed  border bg-[#D9D9D9]  rounded-md mr-2 " />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Service providers</label>
                  </div>
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Resources</label>
                  </div>
                </div>
                <div className="flex gap-x-6 lg:ml-25  md:ml-25">
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Market</label>
                  </div>
                  <div className="flex md:ml-26">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Contracts </label>
                  </div>
                </div>
                <div className="flex gap-x-6 lg:ml-25  md:ml-25">
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Investments</label>
                  </div>
                  <div className="flex md:ml-13">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Communities</label>
                  </div>
                </div>
                <div className="flex gap-x-6 lg:ml-25  md:ml-25">
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">ESG</label>
                  </div>
                  <div className="flex md:ml-35">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">Enterprise</label>
                  </div>
                </div>
                <div className="flex gap-x-6 lg:ml-25  md:ml-25">
                  <div className="flex ">
                    <input id="checkbox-group-8" type="checkbox" className="w-[37px] h-[37px] border-gray-600 appearance-none cursor-not-allowed border bg-[#D9D9D9]  rounded-md mr-2 " disabled />
                    <label htmlFor="checkbox-group-8" className="text-sm md:text-[24px] font-normal cursor-not-allowed text-black">General</label>
                  </div>

                </div>
              </div>
<button className="md:ml-25 mb-5 w-full md:w-[739px] md:h-[74px] border-[1px] p-2 rounded text-[36px] border-[#979797] bg-[#152C24] text-white">Send Message</button>


            </form>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-20 md:ml-25 ">
          <h1 className="font-bold text-2xl lg:ml-25  md:ml-25 md:text-[36px]  mb-4 whitespace-nowrap">
          Chat with us
             </h1>
             <p className="mb-4 md:text-[32px] lg:text-[32px] lg:ml-25  md:ml-25 whitespace-nowrap">
             Speak to our friendly team <br className="hidden md:block" /> via live chat
            </p>
               
       
                    <div className="flex items-center mt-6">
                    <img className="object-cover md:ml-26 object-center w-[33px] h-[33px] rounded-full" src={chat} alt=""/>

                    <div className="mx-2">
              <h2 className="text-sm lg-text-[34px] md-text-[34px]">Start a live chat</h2>
                       
                    </div>
                    </div>
                    <div className="flex items-center mt-6">
                    <img className="object-cover md:ml-26 object-center w-[33px] h-[33px] rounded-full" src={email} alt=""/>

                    <div className="mx-2">
              <h2 className="text-sm lg-text-[34px] md-text-[34px]">Send us an email</h2>
                       
                    </div>
                    </div>
                    <div className="flex items-center mt-6">
                    <img className="object-cover md:ml-26 object-center w-[33px] h-[33px] rounded-full" src={chat} alt=""/>

                    <div className="mx-2">
              <h2 className="text-sm lg-text-[34px] md-text-[34px]">Start a live chat</h2>
                       
                    </div>
                    </div>
        </div>
          </div>
    </div>
  )
}

export default Contact