import React from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Link href="/" className="absolute top-28 left-10">
        Go Back Home
      </Link>
      <div></div>
    </div>
  );
};

export default page;
