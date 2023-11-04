import React from "react";

const Product = () => {
  const list_menu = [
    { title: "menu1" },
    { title: "menu1" },
    { title: "menu1" },
    { title: "menu1" },
    { title: "menu1" },
  ];
  return (
    <div className="container mx-auto mt-3 ">
      <div className="grid grid-cols-[35%_65%] gap-3">
        <div>
        <div className="sticky top-5 flex flex-col border border-gray-300 rounded-md p-4">
          <div className="text-xl font-medium flex justify-between">
            <div>Main Menu</div>
            <div>+</div>
          </div>
          <hr className="my-3" />
          {list_menu.map((val, idx) => (
            <div key={idx} className="p-3 mt-2 flex justify-between">
              <div>{val.title}</div>
              <div>+</div>
            </div>
          ))}
        </div>
        </div>
        
        <div className="border border-gray-300 rounded-md p-4">
            <div className="h-[300px] bg-red-300">1</div>
            <div className="h-[300px] bg-green-300">2</div>
            <div className="h-[300px] bg-blue-300">3</div>
            <div className="h-[300px] bg-gray-300">4</div>
            <div className="h-[300px] bg-yellow-300">5</div>
            <div className="h-[300px] bg-orange-300">6</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
