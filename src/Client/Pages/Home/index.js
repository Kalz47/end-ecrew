import React from "react";
import ServiceCard from "./ServiceCard";

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-5 bg-gray-50 h-full">
      <div>hi</div>
      <div className="md:col-span-3 space-y-4 px-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div>hi</div>
    </div>
  );
}
