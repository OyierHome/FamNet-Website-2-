import chat from "../assets/chat.png";
import feature from "../assets/feature.png";
import feature1 from "../assets/feature1.png";

const Feature = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="bg-white w-full min-h-screen">
        <div className="max-w-[100vw] mx-auto p-10 font-Inter">
          <div className="mb-10">
            {/* Text Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-8 mt-9">
              <div>
                <h1 className="text-[#FDBD26] text-3xl md:text-[40px] font-bold">
                  Agritech
                </h1>
                <h1 className="text-2xl md:text-[40px] font-bold mt-0">
                  The future of Agriculture.
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={feature}
                alt="Agriculture in Namibia"
                className="rounded-sm w-full max-w-[626px] md:h-[417px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2">
              <h1 className="text-[22px] md:text-[40px] font-bold mb-3">
                Have you registered as a Farmer?
              </h1>
              <p className="text-2xl leading-[120%]">
                Registering as a Farmer offers several benefits for farmers:
              </p>
              <p className="text-2xl leading-[120%] mt-6">
                <strong>Efficient Farm Management:</strong> The app helps
                farmers track crops & livestock, manage inventory, planning, and
                schedule tasks, streamlining daily operations.
              </p>
              <p className="text-2xl leading-[120%] mt-6">
                <strong>Expert Advice:</strong> Farmers can access timely and
                accurate agricultural advice,...
               
               
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white w-full block sm:hidden">
        <div className="p-4 font-Inter">
          <div className="flex justify-between items-center">
            <h2 className="text-black font-bold text-[12px]">
              Agri-Tech, The future of Agriculture.
            </h2>
            <img
              src={chat}
              className="w-[31px] h-[31px]"
              alt="Chat Icon"
            />
          </div>

          <div className="flex flex-col items-start mt-8 gap-4">
            <img
              src={feature1}
              alt="Agriculture"
              className="rounded-sm w-[195px] h-[130px]"
            />
            <div>
              <h1 className="text-[10px] font-bold">
                Stay informed with insights and innovations in Agriculture
              </h1>
              <p className="text-[7px] leading-[120%]">
                Smart farming uses advanced technology and data to optimize
                agricultural practices. It improves efficiency, productivity,
                and sustainability by integrating modern tools like sensors and
                IoT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
