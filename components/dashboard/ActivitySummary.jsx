import React from "react";
import InvSum from "./InvSum";
import SaleAct from "./SaleAct";

export default function ActivitySummary() {
  return (
    <div className="bg-blue-50 border border-b border-slate-300 p-8 flex items-center justify-between">
      <SaleAct />
      <InvSum />
    </div>
  );
}
