import React from "react";

interface CardProps {
  year: string | number;
  title: string;
  description: string;
}

const TimelineCard: React.FC<CardProps> = ({ year, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="text-sm text-gray-500 font-medium mb-1">{year}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TimelineCard;
