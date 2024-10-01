
  const CigarettePacket = () => { 
    return (
      <div className="flex flex-col items-center mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cigarette Packet 1 */}
          <div className="bg-white border border-gray-400 w-20 h-28 flex items-center justify-center relative transition-transform transform hover:scale-110">
            <div className="bg-amber-600 h-3 w-full absolute top-0 transition-transform transform hover:translate-y-[-20%]"></div>
            <span className="text-gray-700 font-bold">Dunhill</span>
          </div>
  
          {/* Cigarette Packet 2 */}
          <div className="bg-white border border-gray-400 w-20 h-28 flex items-center justify-center relative transition-transform transform hover:scale-110">
            <div className="bg-amber-600 h-3 w-full absolute top-0 transition-transform transform hover:translate-y-[-20%]"></div>
            <span className="text-gray-700 font-bold">Gold Leaf</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="mt-4 text-center text-lg text-gray-800">
          "Experience the smoothness and richness of our premium cigarettes."
        </p>
      </div>
    );
  };
  
  export default CigarettePacket;
  
  