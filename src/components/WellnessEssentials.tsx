import React from 'react';
import { Button } from './ui/button';



const NulifeWellness = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-stretch w-full max-w-7xl mx-auto px-6 pt-12">

  {/* Video Section */}
  <div className="w-full md:w-1/2 flex">
    <video
      src="/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover rounded-md"
    />
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex items-center">
    <div>
      <p className="font-sans text-sm md:text-base uppercase tracking-widest bg-white/20 px-4 py-2 inline-block rounded-full mb-4">
        A Path to Rediscovery
      </p>
      <h1 className="font-serif text-[18px] md:text-6xl font-medium leading-tight mb-6">
        Find Your Sanctuary for Healing and Renewal
      </h1>
      <p className="font-sans text-base md:text-lg leading-relaxed mb-8">
        NuLife 2 Living is a wellness and recovery center for people who are mentally or physically stressed, emotionally shocked, or recovering from difficult life events. It helps individuals heal and rediscover themselves through professional support and peaceful retreats.
      </p>
      <Button variant="peaceful" size="lg" className="text-lg px-8 py-4">
        Explore Our Retreats
      </Button>
    </div>
  </div>

</div>



  );
};

export default NulifeWellness;