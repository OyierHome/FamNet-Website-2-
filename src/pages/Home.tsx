import Hero from "../Components/Hero";
import Feature from "../Components/Feature";
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#152C24';
    return () => {
      document.body.style.backgroundColor = '#ffffff';
    };
  }, []);

  return (
    <div className="bg-[#152C24] min-h-screen w-full">
      <div className="max-w-[100vw] overflow-hidden">
        <Hero />
        <Feature />
      </div>
    </div>
  );
};

export default HomePage;
