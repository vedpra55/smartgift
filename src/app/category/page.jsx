import React, { Suspense } from "react";
import CategoryProductList from "../../components/CategoryProductList";
import Link from "next/link";

const page = ({ params, searchParams }) => {
  const category = searchParams.id;
  return (
    <main>
      <div className="mx-auto px-3 md:px-5 xl:px-0 max-w-screen-xl py-5">
        <Link href={"/"}>
          <img className="w-14 md:pt-5 pb-5 md:pb-10" src="/logo.jpg" />
        </Link>
        <div className="bg-gray-50 flex gap-x-5 items-center rounded-md mb-5 md:mb-10 px-5 py-2">
          <h1 className="text-xl font-medium ">{category}</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-x-5 md:gap-y-5 md:grid-cols-3 xl:grid-cols-5 mb-20">
          <Suspense fallback="Loading">
            <CategoryProductList category={category} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default page;
