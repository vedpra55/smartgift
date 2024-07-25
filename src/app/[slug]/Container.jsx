import { MdAutoGraph } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import Stepper from "./Stepper";
import Image from "./Image";
import { FaWhatsapp } from "react-icons/fa6";

const deliveryDetails = [
  "delivery take 4-6 Working days",
  "you will recive tracking details on your WhatsApp number",
  "delivered product might a bit differ from the image shown",
  "to maintain delivery hasel please provide full and exact loaction",
];

const refundPolicy = [
  "Need opening video of product for return and replacement.",
  "If you receive broken product or have any issue regarding product send video on WhatsApp on 8709553003 within 24 hours of delivery",
  "Without opening video no replacement will be processed.",
  "In case of return refund will be processed within 3-4 working days.",
];

const Container = async ({ product }) => {
  let url = `${process.env.NEXT_PUBLIC_URL}/${product.slug}`;
  let uri = `hello i want to buy ${product.name} price is ${product.discountPrice} Thankyou *URL* ${url}`;
  let encoded = encodeURI(uri);

  return (
    <div className="grid grid-cols-12 md:gap-x-5 xl:gap-x-20">
      <Image product={product} />
      <div className="col-span-12 md:col-span-5">
        <div className="flex gap-x-2 pb-3 items-center">
          <span className=" text-lime-500 text-sm">
            <MdAutoGraph />
          </span>
          <p className=" italic text-gray-500 text-xs md:text-[10px] md:text-xs ">
            147 People Orderd
          </p>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
        <div className="flex mt-4 gap-x-3 items-end">
          <p className="font-medium text-xl md:text-2xl">
            ₹ {product.discountPrice}
          </p>
          <p className="text-gray-400 text-xs md:text-lg pb-[1px] line-through">
            ₹ {product.price}
          </p>
          <div className="flex pb-1  text-teal-500 text-xs md:text-sm gap-x-1 items-center">
            <TbDiscount />
            <p>20% Discount</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-5">{product?.description}</p>
        <Stepper />
        <a
          className="w-full"
          target="_blank"
          href={`https://wa.me/+918709553003?text=${encoded}`}
        >
          <button className="shadow-lg mt-6 md:mt-10 shadow-red-300 hover:scale-90  transition-transform flex items-center justify-center gap-x-4 bg-black text-white rounded-md px-1 py-3 w-full">
            <span className="text-xl text-green-300">
              <FaWhatsapp />
            </span>
            <p className="text-xl font-medium">Buy Now</p>
          </button>
        </a>
        <div className="mt-0 md:mt-10 xl:mt-14">
          <div className=" mt-5 py-2 text-gray-700 bg-gray-50 px-4">
            <p className="font-medium ">Delivery Details</p>
            <ul className="text-xs px-3 space-y-1 mt-2 list-disc">
              {deliveryDetails.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className=" mt-5 py-2 text-gray-700 bg-gray-50 px-4">
            <p className="font-medium ">Delivery Details</p>
            <ul className="text-xs px-3 space-y-1 mt-2 list-disc">
              {refundPolicy.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
