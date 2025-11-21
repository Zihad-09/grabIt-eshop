import useData from "../../../../../../../Hooks/useData";

const HomeComponent = () => {
  const { categorys } = useData();

  return (
    <div className="container mx-auto w-full my-10 px-4">
  
      <div
        className="grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-6 
      gap-4 sm:gap-6"
      >
        {categorys.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center
                   bg-gray-100 p-4 rounded-md 
                   hover:scale-105 duration-300 
                   cursor-pointer w-full"
          >
            <img
              className="w-14 h-14 sm:w-16 sm:h-16 mb-3 object-contain"
              src={category.image}
              alt={category.name}
            />

            <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
              {category.name}
            </p>

            <p className="text-[10px] sm:text-xs text-gray-400">
              {category.items} items
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
