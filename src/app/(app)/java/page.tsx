"use client";
import JavaHero from "@/components/Java/Fragments/JavaHero";
import React from "react";
import JavaContent from "@/components/Java/Fragments/JavaContent";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <JavaHero />
      <JavaContent />
    </div>
  );
};

export default page;
