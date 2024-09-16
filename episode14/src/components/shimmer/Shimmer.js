const Shimmer = () => {
  return (
    <div className="flex flex-wrap w-full mt-[100px]">
      {Array(20)
        .fill("")
        .map((index) => (
          <div key={index} className="w-[20%] p-4">
            <div className="w-full h-48 bg-slate-300 rounded-lg mb-2"></div>
            <div className="flex">
              <div className="w-10 h-10 bg-slate-300 rounded-full mr-4"></div>
              <div className="w-3/4 h-6 bg-slate-300 rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
