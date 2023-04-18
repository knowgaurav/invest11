import React from "react";
import TestimonialGrid from "./TestimonialGrid";

const Testimonials = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="font-semibold text-blue-500 text-lg">
        What people are saying
      </div>
      <div className="font-semibold text-5xl my-10">
        Loved by product people
      </div>
      <TestimonialGrid />
    </div>
  );
};

export default Testimonials;
