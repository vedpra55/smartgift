import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <section className="mt-10 md:mt-16">
      <p className="text-2xl font-medium mb-5">Category</p>
      <div className=" gap-4 md:gap-x-10 grid grid-cols-2 md:grid-cols-4 mb-20">
        <Link href={"/category?id=Personalized Rakhi"}>
          <div className="category">
            <div className=" absolute z-30 top-2">
              <img
                className="w-32 md:w-48 object-cover"
                src="/category/2.png"
              />
              <p className="pt-3 md:pt-4 text-center text-sm md:text-base font-medium">
                Personalized Rakhi
              </p>
            </div>
            <div className=" z-10 absolute top-5 ">
              <div className="w-32 h-32 rounded-full bg-gradient-to-t to-[#FFFFFF] from-[#FFFFFF]/0"></div>
            </div>
          </div>
        </Link>
        <Link href={"/category?id=Rakhi Hamper"}>
          <div className="category to-[#DAFAEB] from-[#8BFBC7] ">
            <div className=" absolute z-30 top-2">
              <img
                className="w-32 md:w-48 object-cover"
                src="/category/1.png"
              />
              <p className="pt-4 text-center text-sm md:text-base font-medium">
                Rakhi Hamper
              </p>
            </div>
            <div className=" z-10 absolute top-5 ">
              <div className="w-32 h-32 rounded-full bg-gradient-to-t to-[#FFFFFF] from-[#FFFFFF]/0"></div>
            </div>
          </div>
        </Link>
        <Link href={"/category?id=Rakhi Combo"}>
          <div className="category to-[#E6FAFE] from-[#97E6F7] ">
            <div className=" absolute z-30 top-2">
              <img
                className=" w-32 md:w-48 object-cover"
                src="/category/3.png"
              />
              <p className="pt-4 text-center text-sm md:text-base font-medium">
                Rakhi Combo
              </p>
            </div>
            <div className=" z-10 absolute top-5 ">
              <div className="w-32 h-32 rounded-full bg-gradient-to-t to-[#FFFFFF] from-[#FFFFFF]/0"></div>
            </div>
          </div>
        </Link>
        <Link href={"/category?id=Rakhi Gifts"}>
          <div className="category  to-[#F3F1FB] from-[#BCACFE] ">
            <div className=" absolute z-30 top-2">
              <img
                className=" w-32 md:w-48 object-cover"
                src="/category/4.png"
              />
              <p className="pt-4 text-center text-sm md:text-base font-medium">
                Rakhi Gifts
              </p>
            </div>
            <div className=" z-10 absolute top-5 ">
              <div className="w-32 h-32 rounded-full bg-gradient-to-t to-[#FFFFFF] from-[#FFFFFF]/0"></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Category;
