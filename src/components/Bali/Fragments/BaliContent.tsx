"use client";
import React from "react";
import {useBaliContext} from "@/context/BaliContext";
import DestinationCard from "@/components/Shared/Elements/DestinationCard";

type Props = {};

const BaliContent = (props: Props) => {
  const {baliTop, baliDisc, baliNew} = useBaliContext();
  return (
    <div className="flex flex-col">
      {/* Top Destination */}
      <div className="px-10 pt-20" id="top">
        <h3 className="px-5 py-5 font-semibold text-lg">Top Destination</h3>
        <div className="flex justify-start items-center h-full">
          {baliTop.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
      {/* Discounted Destination */}
      <div className="px-10 pt-20" id="discount">
        <h3 className="px-5 py-5 font-semibold text-lg">Discounted Destination</h3>
        <div className="flex justify-start items-center h-full">
          {baliDisc.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
      {/* New Destination */}
      <div className="px-10 py-20" id="newly">
        <h3 className="px-5 py-5 font-semibold text-lg">New Destination</h3>
        <div className="flex justify-start items-center h-full">
          {baliNew.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaliContent;
