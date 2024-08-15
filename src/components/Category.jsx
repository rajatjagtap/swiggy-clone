import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Category() {
  const [categories, setCategores] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("https://swiggy-clone-lkmd.onrender.com/categories");
    const data = await response.json();
    console.log("cate--",data,response);
    setCategores(data);
  };

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  const goPreviousSlide = () => {
    if (slide === 0) return false;
    console.log(categories.length);  // 20
    setSlide(slide - 3);  // 4 rotations
    console.log(slide - 3);
  };

  const goNextSlide = () => {
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 3);
    console.log(slide + 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className=" cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center flex">
            <FaLongArrowAltLeft onClick={goPreviousSlide} />
          </div>
          <div className="  cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 justify-center items-center flex">
            <FaLongArrowAltRight onClick={goNextSlide} />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="shrink-0 w-[150px] duration-500"
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
            >
              <img src={"https://swiggy-clone-lkmd.onrender.com/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}
