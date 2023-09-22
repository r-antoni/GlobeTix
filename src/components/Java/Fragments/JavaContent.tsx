import {useJavaContext} from "@/context/JavaContext";
import React from "react";
import DestinationCard from "@/components/Shared/Elements/DestinationCard";

type Props = {};

const JavaContent = (props: Props) => {
  const {javaTop, javaDisc, javaNew} = useJavaContext();
  return (
    <div className="flex flex-col">
      {/* Top Destination */}
      <div className="px-10 pt-20" id="top">
        <h3 className="px-5 py-5 font-semibold text-lg">Top Destination</h3>
        <div className="flex justify-start items-center h-full">
          {javaTop.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
      {/* Discounted Destination */}
      <div className="px-10 pt-20" id="discount">
        <h3 className="px-5 py-5 font-semibold text-lg">Discounted Destination</h3>
        <div className="flex justify-start items-center h-full">
          {javaDisc.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
      {/* New Destination */}
      <div className="px-10 py-20" id="newly">
        <h3 className="px-5 py-5 font-semibold text-lg">New Destination</h3>
        <div className="flex justify-start items-center h-full">
          {javaNew.map((destination: any) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaContent;
