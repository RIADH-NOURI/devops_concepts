import React from "react";
import {ChevronDown  } from"lucide-react"

const filters = ["All Categories", "Popular", "Trending", "Recommended"];

const CategoryFilters: React.FC = () => (
  <div className="flex gap-3 p-3 flex-wrap pr-4">
    {filters.map((label) => (
      <button
        key={label}
        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] pl-4 pr-2"
      >
        <p className="text-[#0e141b] text-sm font-medium leading-normal">{label}</p>
         <ChevronDown color="#0e141b" />
      </button>
    ))}
  </div>
);

export default CategoryFilters; 