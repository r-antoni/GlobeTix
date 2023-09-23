import React from "react";
import Link from "next/link";
import BookingForm from "@/components/Shared/Fragments/BookingForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-40 flex flex-col justify-center items-center gap-10 bg-slate-700 w-1/2 mx-auto">
      <h3>Order Your Dream Tour Now !</h3>
      <BookingForm tour="Monas-Jakarta Tour" />
    </div>
  );
};

export default page;
