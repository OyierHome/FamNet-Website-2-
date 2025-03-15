
import voice1 from "../assets/voice1.png";
import voice2 from "../assets/voice2.png";
import voice3 from "../assets/voice3.png";
import voice4 from "../assets/voice4.png";
import voice5 from "../assets/voice5.png";
import voice6 from "../assets/voice6.png";
import voice7 from "../assets/voice7.png";
import voice8 from "../assets/voice8.png";
import voice9 from "../assets/voice9.png";
import voice10 from "../assets/voice10.png";
import voice11 from "../assets/voice11.png";
import voice12 from "../assets/voice12.png";
import down from "../assets/down.png";
import logo3 from "../assets/logo3.png"
import plybtn from "../assets/plybtn.png"
import pin  from  "../assets/pin.png"
import right1 from "../assets/right1.png";
import right2 from "../assets/right2.png";

const blogPosts = [
  {
    id: 1,
    title: "Planning & management ",
    description: "Farmnet has improved my productivity by linking me with service provides & resources",
    image: voice1,
  },
  { id: 2, title: "Market", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice2 },
  { id: 3, title: "Productivity", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice3 },
  { id: 4, title: "Planning & management", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice4 },
 
  { id: 5, title: "Market", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice5 },
  { id: 6, title: "Productivity", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice6 },
  { id: 7, title: "Planning & management", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice7 },
  { id: 8, title: "Market", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice8 },
  { id: 9, title: "Productivity", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice9 },
  { id: 10, title: "Planning & management", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice10 },
  { id: 11, title: "Market", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice11 },
  { id: 12, title: "Productivity", description: "Farmnet has improved my productivity by linking me with service provides & resources", image: voice12 },
];

const VoiceMainPage = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="hidden sm:block">
      <div className=" mb-2 px-6 flex justify-between items-center">
        <h1 className="text-[#FDBD26] mt-20 md:ml-29 lg:ml-29 text-[24px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
          Voice of Farmers
        </h1>
        <img src={down} className="h-[27px] w-[27px] mr-42 mt-25" alt="down-icon" />
      </div>
      
      {/* Grid Section */}
      <div className="grid grid-cols-3 space-x-1 sm:grid-cols-3 ml-2 md:ml-35 mr-35 mt-5 mb-4">
  {blogPosts.map((post) => (
    <div key={post.id} className="flex flex-col items-start w-full">
      <div className="relative">
        <img
          className="mt-4 object-cover w-full md:w-[345px] md:h-[542px] lg:w-[345px] lg:h-[542px] rounded-md"
          src={post.image}
          alt="farmervoice"
        />
        
              <img
                src={plybtn}
                alt="play button"
                className="w-[101px] [101px] absolute inset-32 mt-24 flex items-center justify-center"
              />
        {/* Always show the logo */}
        <img src={logo3} className="absolute bottom-39 left-2 w-[61px] h-[61px]" alt="logo" />

        <div className=" flex justify-between mt-8 items-center absolute bottom-8 left-0">
        <img src={pin} className="ml-3 mt-14 w-[21px] h-[21px]" />
        <h1 className="text-white text-[18px] mt-14 ml-3">
        Walvis bay, Namibia
        </h1>
        <img src={right1} className="ml-26 mt-14 w-[12px] h-[12px]" />
      </div>
        {/* Conditional title & description */}
        {post.title && post.description && (
          <div className="absolute bottom-18 md:bottom-14 left-4 md:left-4 text-left">
            <h1 className="text-white md:text-[20px] font-bold">
              {post.title}
            </h1>
            <h1 className="text-white md:text-[18px] font-inter md:mt-0">
              {post.description}
            </h1>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
</div>
<div className="block sm:hidden w-full">
<div className="px-4 py-6">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#FDBD26] text-xl font-bold">Voice of Farmers</h1>
        <img src={down} className="h-6 w-6" alt="down-icon" />
      </div>
      
      {/* Grid Section */}
      <div className="grid grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="relative w-full">
            <img className="w-[107px] h-[160px] object-cover rounded-md" src={post.image} alt="farmervoice" />
            
            {/* Play Button */}
            <img src={plybtn} className="w-[28px] h-[31px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="play button" />
            
            {/* Logo */}
            <img src={logo3} className="absolute  bottom-15  left-3 w-[19px] h-[18px]" alt="logo" />
            
            {/* Location */}
            <div className="absolute bottom-0 left-3 flex items-center text-white text-sm">
              <img src={pin} className="w-[6px] h-[6px] mr-1" alt="pin" />
             
              <span className="text-[6px] ml-1">Walvis bay, Namibia</span>
              <img src={right2} className="w-[6px] h-[6px] mb-2 ml-4 mt-2" alt="right" />
            </div>
            
            {/* Title & Description */}
            <div className="absolute bottom-4 left-3 text-white">
              <h1 className=" text-[8px] mt-4  font-bold">{post.title}</h1>
              <p className=" text-[6px] ">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
    </div>
  );
};

export default VoiceMainPage;
