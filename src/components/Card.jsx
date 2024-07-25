import Link from "next/link";
import { MdAutoGraph } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";

const Card = ({ product }) => {
  return (
    <Link
      href={`/${product.fields.slug}`}
      style={{
        boxShadow: "0px 18px 36px 0px #A6AFBA33",
      }}
      className="border rounded-xl"
    >
      <div className="rounded-tl-xl rounded-tr-xl  ">
        <img
          className="w-full md:h-56  rounded-tl-xl rounded-tr-xl"
          src={"https:" + product.fields.images[0].fields.file.url}
        />
      </div>
      <div className="bg-white rounded-xl p-2  md:px-5 md:py-4">
        <div className="flex justify-between items-center">
          <p className=" text-gray-800 text-xs md:text-base truncate">
            {product.fields.name}
          </p>
        </div>
        <div className="flex pt-1 flex-wrap gap-y-1  justify-between items-center">
          <div className="flex items-end gap-x-2">
            <p className="font-medium text-sm md:text-base text-gray-800">
              ₹ {product.fields.discountPrice}
            </p>
            <p className="text-gray-400 text-xs md:text-sm pb-[1px] line-through">
              ₹ {product.fields.price}
            </p>
          </div>
          <div className="flex  text-teal-500 text-xs md:text-sm gap-x-1 items-center">
            <TbDiscount />
            <p>20% Discount</p>
          </div>
        </div>
        <div className="flex gap-x-2 py-2 md:py-3 items-center">
          <span className=" text-lime-500 text-sm">
            <MdAutoGraph />
          </span>
          <p className=" italic text-gray-500 text-[10px] md:text-xs ">
            147 People Orderd
          </p>
        </div>
        <button className="w-full hover:bg-gray-700 text-sm md:text-base active:scale-95 mt-2 md:mt-3 bg-black text-white py-2 rounded-md">
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default Card;
