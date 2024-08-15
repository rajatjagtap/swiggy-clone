import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Card from "./Card";

export default function TopRest() {
  const [chains, setChains] = useState([]);

  const fetchChains = async () => {
    const response = await fetch("http://localhost:5000/restaurantChains");
    const data1 = await response.json();
    setChains(data1);
  };

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchChains();
  }, []);

  const goPreviousSlide = () => {
    if (slide === 0) return false;
    console.log("ada------", slide, chains.length);
    setSlide(slide - 2); // 2 rotations
    console.log(slide - 2);
  };

  const goNextSlide = () => {
    if (chains.length - 4 === slide) return false;
    setSlide(slide + 2);
    console.log(slide + 2);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Pune
        </div>
        <div className="flex">
          <div className=" cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center flex">
            <FaLongArrowAltLeft onClick={goPreviousSlide} />
          </div>
          {/* <div className="  cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center flex">
            <FaLongArrowAltRight  onClick={goNextSlide} />
          </div> */}
          <div
            className={`cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center flex ${
              slide === 4 ? "opacity-50 " : ""
            }`}
            onClick={slide !== 4 ? goNextSlide : null}
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden ">
        {chains.map((d, i) => {
          return (
            <div
              key={i}
              className="shrink-0 duration-500"
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
            >
              <Card {...d} key={i} />;
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}
