// // import down  from "../assets/down.png";

import agri1 from "../assets/agri1.png";
import agri2 from "../assets/agri2.png";
import agri3 from "../assets/agri3.png";
import agri4 from "../assets/agri4.png";

// export default function AgritechMainPage() {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "Revolutionizing Agriculture with Digital solutions",
//       description: "Stay informed with insights and innovations in Agriculture",
//       image: agri1,
//     },
//     {
//       id: 2,
//       title: "Revolutionizing Agriculture with Digital solutions",
//       description: "Stay informed with insights and innovations in Agriculture",
//       image: agri2,
//     },
//     {
//       id: 3,
//       title: "Revolutionizing Agriculture with Digital solutions",
//       description: "Stay informed with insights and innovations in Agriculture",
//       image: agri3,
//     },
//     {
//       id: 4,
//       title: "Revolutionizing Agriculture with Digital solutions",
//       description: "Stay informed with insights and innovations in Agriculture",
//       image: agri4,
//     },
//   ];

//   return (
//     <>
//       <section className="bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Title Section */}
//           <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-left text-white font-inter mb-8">
//             <h2 className="text-[#FDBD26] text-[28px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
//               AgriTech
//             </h2>

//             <p className="text-black text-[24px] md:text-[30px] font-inter leading-[150%] mt-4">
//               Agritech, or agricultural technology, refers to the application of<br /> 
//               technological innovations to improve and enhance agricultural
//               practices. It<br />  is aimed at increasing productivity, sustainability,
//               and efficiency in farming and food production.
//             </p>
//           </div>

//           {/* ✅ Grid Layout Fixed (2 images per row on all screens) */}
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
//             {blogPosts.map((post) => (
//               <div key={post.id} className="flex flex-col items-start justify-start">
//                 <h2 className="font-semibold text-gray-800 hover:underline dark:text-white text-xl block">
//                   {post.title}
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{post.description}</p>
//                 <img className="mt-4 object-cover  w-[538px] rounded-md h-[305px]" src={post.image} alt={post.title} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import down from "../assets/down.png";  // Uncomment if needed
 // Add your logo import
import logo1 from "../assets/logo1.png";  // Add your logo import


export default function AgritechMainPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Agriculture with Digital solutions",
      description: "Stay informed with insights and innovations in Agriculture",
      image: agri1,
    },
    {
      id: 2,
      title: "Revolutionizing Agriculture with Digital solutions",
      description: "Stay informed with insights and innovations in Agriculture",
      image: agri2,
    },
    {
      id: 3,
      title: "Revolutionizing Agriculture with Digital solutions",
      description: "Stay informed with insights and innovations in Agriculture",
      image: agri3,
    },
    {
      id: 4,
      title: "Revolutionizing Agriculture with Digital solutions",
      description: "Stay informed with insights and innovations in Agriculture",
      image: agri4,
    },
  ];

  return (
    <>
      <section className="bg-white ml-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Title Section */}
          <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-left text-white font-inter mb-8">
            <h2 className="text-[#FDBD26] text-[28px] md:text-[36px] lg:text-[47px] font-bold leading-[120%]">
              AgriTech
            </h2>

            <p className="text-black text-[24px] md:text-[30px] font-inter leading-[150%] mt-4">
              Agritech, or agricultural technology, refers to the application of<br /> 
              technological innovations to improve and enhance agricultural
              practices. It<br />  is aimed at increasing productivity, sustainability,
              and efficiency in farming <br /> and food production.
            </p>
          </div>

          {/* ✅ Grid Layout Fixed (2 images per row on all screens) */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col items-start justify-start">
                
                {/* ✅ Title & Logo in Same Line */}
                <div className="flex flex-col items-start w-full">
  <img src={logo1} alt="Logo" className="w-12 h-12 self-end" /> {/* Chota logo right side */}
  <h2 className="font-semibold text-gray-800  text-[32px] mt-1">
    {post.title}
  </h2>
</div>
<p className="mt-2 text-sm text-gray-500 text-[32px]">{post.description}</p>



                <img className="mt-4 object-cover w-[538px] mb-2 rounded-md h-[305px]" src={post.image} alt={post.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
