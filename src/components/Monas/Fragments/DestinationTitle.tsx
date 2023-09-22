import React from "react";

type Props = {
  title: string;
};

const DestinationTitle = ({title}: Props) => {
  return (
    <div className="flex justify-center items-center h-20">
      <h2>{title}</h2>
    </div>
  );
};

export default DestinationTitle;
