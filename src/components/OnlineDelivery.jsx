import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
  const [chains, setChains] = useState([]);

  const fetchChains = async () => {
    const response = await fetch("https://swiggy-clone-lkmd.onrender.com/restaurantChains");
    const data1 = await response.json();
    setChains(data1);
  };

  useEffect(() => {
    fetchChains();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Pune
        </div>
      </div>
      <div className="  grid grid-cols-2 md:grid-cols-4 gap-3">
        {chains.map((d, i) => {
          return <Card {...d} />;
        })}
      </div>
    </div>
  );
}
