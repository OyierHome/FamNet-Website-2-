import Gallery1 from "../assets/gallery1.png";
import { IoIosArrowDown } from "react-icons/io";

const GalleryPage2 = () => {
  const blogPosts = [
    { id: 1, image: Gallery1 },
    { id: 2, image: Gallery1 },
    { id: 3, title: "Technology & innovation", image: Gallery1 },
    { id: 4, image: Gallery1 },
  ];

  return (
    <>
      <div className="bg-[#152C24] min-h-screen">
        {/* Ensure the background color covers the entire page */}
        <div className="mb-2 px-6 bg-[#152C24] mt-22 text-white md:ml-28 flex justify-between items-center">
          <h2 className="text-2xl md:text-[32px] font-bold mt-1 md:mt-6">Events</h2>
          <div className="relative md:mt-6 flex justify-end md:gap-1 md:mr-25">
            <button className="text-[#919291] text-md md:text-[20px] leading-[120%] cursor-pointer">View More</button>
            <IoIosArrowDown className="w-[33px] h-[23px] text-[#33363F]" />
          </div>
        </div>

        <section className="ml-8 mt-1">
          <div className="font-inter mb-20 items-center justify-center bg-[#152C24] px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 bg-[#152C24] gap-4 sm:grid-cols-2 ml-2 md:ml-10 mr-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-col items-start w-full">
                  <div className="relative">
                    <img
                      className="mt-4 object-cover w-full sm:w-[180px] sm:h-[106px] md:w-[577.96px] md:h-[385px] rounded-md"
                      src={post.image}
                      alt="market"
                    />
                    
                    <h2 className="font-bold text-white md:mt-6 text-[10px] md:text-[16px] mt-1 sm:font-bold">
                      March 03, 2025
                    </h2>

                    {/* Conditionally render and position the title only for the 3rd post */}
                    {post.id === 3 && (
                      <h2 className="absolute top-0 ml-1 whitespace-nowrap  font-bold text-white text-[16px] sm:text-[24px] md:text-[32px] z-10">
                        {post.title}
                      </h2>
                    )}

                    <p className="mt-2 text-sm text-white mb-22 font-inter md:mt-2 text-[10px] md:text-[32px]">
                      Market access is a critical element of successful farming
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage2;
