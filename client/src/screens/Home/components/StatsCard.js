import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StatsCard = ({ title, value }) => {
  const percentage = 66;

  return (
    <div className="bg-gray-50/50 border rounded-md p-3 flex items-center justify-between">
      <div>
        <div className="font-medium text-base text-gray-500">{title}</div>
        <div className="text-xl font-medium">{value}</div>
        <div className="text-xs text-gray-500 italic">Recent {title} - 06-02-2023</div>
      </div>
      <div className="w-20">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={15}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `#6e48aa`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transformOrigin: "center center",
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: "#d3cce3",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              transformOrigin: "center center",
            },
            // Customize the text
            text: {
              // Text color
              fill: "grey",
              // Text size
              fontSize: "20px",
              fontWeight: 500,
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
    </div>
  );
};

export default StatsCard;
