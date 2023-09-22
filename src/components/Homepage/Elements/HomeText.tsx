import React from "react";

type Props = {};

const HomeText = (props: Props) => {
  return (
    <div className="bg-white sm:text-center lg:text-left dark:bg-gray-900">
      <h1 className="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white dark:bg-gray-900">
        <span className="block lg:mb-2 dark:text-white">Making Travel Dreams</span>
        <span className="block dark:text-white">a Reality</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Choose which island in Indonesia
        <span className="block lg:mb-1"></span> you want to go!
      </p>
    </div>
  );
};

export default HomeText;
