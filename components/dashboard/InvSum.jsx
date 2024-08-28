import React from 'react'

export default function InvSum() {
  return (
    <div>
           <h2 className="mb-3 text-[18px] font-semibold">Inventory Summary</h2>
        <div className="flex flex-col gap-5">
          <div className="rounded-lg border shadow-lg border-slate-200 hover:border-blue-400 bg-white px-4 py-2 cursor-pointer flex justify-between items-center gap-3 transition-all duration-300">
            <h2 className="uppercase text-slate-500">Quantity in hand</h2>
            <span>10</span>
          </div>

          <div className="rounded-lg border shadow-lg border-slate-200 hover:border-blue-400 bg-white px-2 py-2 cursor-pointer flex justify-between items-center gap-3 transition-all duration-300">
            <h2 className="uppercase text-slate-500">
              Quantity to be received
            </h2>
            <span>10</span>
          </div>
        </div>
    </div>
  )
}
