"use client";

import { useState } from "react";

const Image = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="col-span-12 w-full md:col-span-7">
      <img
        className="w-full md:h-[36rem] rounded-xl"
        src={"https:" + product?.images[imgIndex].fields.file.url}
      />
      <div className="flex mt-2 md:mt-5 gap-x-5 mb-5 md:mb-0">
        {product.images.map((image, i) => (
          <div key={i}>
            <img
              onClick={() => setImgIndex(i)}
              className={`${
                i === imgIndex ? " border-2 border-gray-700" : ""
              } w-16 cursor-pointer rounded-md`}
              src={image.fields.file.url}
              alt={product.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
