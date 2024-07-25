import BesetSeller from "../components/BesetSeller";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Stepper from "@/components/Stepper";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className=" mx-auto px-3 md:px-5 xl:px-0 max-w-screen-xl py-5 ">
        <Stepper />
        <Category />
        <div className="grid grid-cols-2 gap-3 md:gap-x-5 md:gap-y-5 md:grid-cols-3 xl:grid-cols-5 mb-20">
          <div className="col-span-2 md:col-span-3 xl:col-span-5">
            <h3 className=" text-4xl pb-2 font-medium">Bestseller</h3>
            <p className="pb-2">Upto 20% Discount on all product</p>
          </div>
          <Suspense fallback={"Loading"}>
            <BesetSeller />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
