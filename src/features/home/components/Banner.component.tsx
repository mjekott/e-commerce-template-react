import React from "react";

function Banner() {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center  h-[521px]"
      style={{ backgroundImage: "url('images/banner.jpeg')" }}
    >
      <div className="container h-full flex flex-col justify-center ">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          Best collection for <br /> home decoration
        </h1>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
        </p>
        <div className="mt-10">
          <a
            href="/#"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
