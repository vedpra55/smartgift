import { FaWhatsapp } from "react-icons/fa6";
import { GrRadialSelected } from "react-icons/gr";
import { GiConfirmed } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";

const Stepper = () => {
  const upi = "https://www.vectorlogo.zone/logos/upi/upi-ar21.svg";
  return (
    <div className="mt-8 md:mt-16">
      <h2 className="font-medium text-base md:text-2xl">5 Easy Steps</h2>
      <div className="grid mt-3 md:mt-5 text-[10px] md:text-xs grid-cols-3 gap-2 md:grid-cols-5 md:gap-x-5">
        <div
          className="w-full gap-x-2 flex flex-col justify-center items-center gap-y-2 md:flex-row bg-orange-200 rounded-lg p-2 py-3 md:py-5 md:p-5"
          style={{
            boxShadow: "0px 18px 36px 0px #A6AFBA33",
          }}
        >
          <span>
            <GrRadialSelected />
          </span>
          <p className="text-center">Choose Your Rakhi</p>
        </div>
        <div
          className="w-full gap-x-2 flex flex-col justify-center items-center gap-y-2 md:flex-row bg-teal-200  rounded-lg  p-2 py-3 md:py-5 md:p-5"
          style={{
            boxShadow: "0px 18px 36px 0px #A6AFBA33",
          }}
        >
          <span>
            <FaWhatsapp />
          </span>
          <p className="text-center">Whatsapp the Pictures</p>
        </div>
        <div
          className="w-full gap-x-2 flex flex-col justify-center items-center gap-y-2 md:flex-row bg-lime-200  rounded-lg p-2 py-3 md:py-5 md:p-5"
          style={{
            boxShadow: "0px 18px 36px 0px #A6AFBA33",
          }}
        >
          <span>
            <GiConfirmed />
          </span>
          <p className="text-center">Confirm The Order</p>
        </div>
        <div
          className="w-full gap-x-2 flex flex-col justify-center items-center gap-y-2 md:flex-row bg-amber-200 rounded-lg p-2 py-3 md:py-5 md:p-5"
          style={{
            boxShadow: "0px 18px 36px 0px #A6AFBA33",
          }}
        >
          <span>
            <img src={upi} className="w-5 md:w-10" />
          </span>
          <p className="text-center">Pay Using UPI</p>
        </div>
        <div
          className="w-full  flex flex-col justify-center items-center gap-y-2 md:flex-row  gap-x-2  bg-green-200 rounded-lg p-2 py-3 md:py-5 md:p-5"
          style={{
            boxShadow: "0px 18px 36px 0px #A6AFBA33",
          }}
        >
          <span>
            <IoMdHappy />
          </span>
          <p className="text-center">Get Your Order</p>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
