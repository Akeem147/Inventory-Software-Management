import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

export default function SaleAct() {
  return (
    <div>
      <div className="border-r-2 border-gray-300 pr-[40px]">
        <h2 className="mb-3 text-[18px] font-semibold">Sales Activity</h2>
        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-lg w-[155px] h-[120px] shadow-lg bg-white border border-slate-200 hover:border-blue-400 p-3 cursor-pointer flex items-center flex-col gap-2 transition-all duration-300">
            <h4 className="font-semibold text-4xl">10</h4>
            <small className="text-slate-500">Qty</small>
            <div className="flex text-slate-500 items-center">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase text-[13px]">To be packed</span>
            </div>
          </div>

          <div className="rounded-lg w-[155px] h-[120px] shadow-lg bg-white border border-slate-200 hover:border-blue-400 p-3 cursor-pointer flex items-center flex-col gap-2 transition-all duration-300">
            <h4 className="font-semibold text-4xl">10</h4>
            <small className="text-slate-500">Qty</small>
            <div className="flex text-slate-500 items-center">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase text-[13px]">To be shipped</span>
            </div>
          </div>

          <div className="rounded-lg w-[155px] h-[120px] shadow-lg bg-white border border-slate-200 hover:border-blue-400 p-3 cursor-pointer flex items-center flex-col gap-2 transition-all duration-300">
            <h4 className="font-semibold text-4xl">10</h4>
            <small className="text-slate-500">Qty</small>
            <div className="flex text-slate-500 items-center">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase text-[13px]">To be delivered</span>
            </div>
          </div>

          <div className="rounded-lg w-[155px] h-[120px] shadow-lg bg-white border border-slate-200 hover:border-blue-400 p-3 cursor-pointer flex items-center flex-col gap-2 transition-all duration-300">
            <h4 className="font-semibold text-4xl">10</h4>
            <small className="text-slate-500">Qty</small>
            <div className="flex text-slate-500 items-center">
              <CheckCircle2 className="w-4 h-4" />
              <span className="uppercase text-[13px]">To be invoiced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
