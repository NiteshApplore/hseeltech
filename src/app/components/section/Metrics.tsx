"use client";
const Metrics = () => {
  return (
    <div className="min-h-[186px] bg-[#111827] flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl py-8 border-t border-b border-white/10">
        {/* Metric 1 */}
        <div className="w-1/2 sm:w-1/4 flex flex-col items-center justify-center py-4 border-white/10 sm:border-r">
          <h3 className="text-[40px] font-bold text-[#12C9C4]">500+</h3>
          <p className="text-white/90 text-center">Text Experts</p>
        </div>

        {/* Metric 2 */}
        <div className="w-1/2 sm:w-1/4 flex flex-col items-center justify-center py-4 border-t sm:border-t-0 border-white/10 sm:border-r">
          <h3 className="text-[40px] font-bold text-[#12C9C4]">1200+</h3>
          <p className="text-white/90 text-center">Projects Delivered</p>
        </div>

        {/* Metric 3 */}
        <div className="w-1/2 sm:w-1/4 flex flex-col items-center justify-center py-4 border-white/10 sm:border-r">
          <h3 className="text-[40px] font-bold text-[#12C9C4]">50+</h3>
          <p className="text-white/90 text-center">Global Clients</p>
        </div>

        {/* Metric 4 */}
        <div className="w-1/2 sm:w-1/4 flex flex-col items-center justify-center py-4 border-t sm:border-t-0 border-white/10">
          <h3 className="text-[40px] font-bold text-[#12C9C4]">10+</h3>
          <p className="text-white/90 text-center">Countries Served</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
