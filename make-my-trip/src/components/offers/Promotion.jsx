import React from "react";
import { lockData } from "../__mockdata__/offerData";
import PromotionCard from "./PromotionCard";

const Promotion = () => {
  return (
    <div className="flex promotion">
      {lockData?.map((el) => (
        <PromotionCard key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Promotion;
