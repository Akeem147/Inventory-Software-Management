import Link from "next/link";
import React from "react";

export default function SubscriptionCard() {
  return (
    <div className="px-2 mb-2">
      <div className="px-3 bg-slate-900 py-2">
        <div className="border-b border-slate-500 pb-2">
          <p className="text-sm border-l-2 pl-2 border-orange-400">
            Your premium plan's trial expires in {""}
            <span className="text-orange-400">14 days.</span>
          </p>
        </div>
        <div className="flex text-sm space-x-2">
          <button className='pr-2 border-r-2 border-slate-600'>Change plan</button>
          <Link href='#'>Upgrade</Link>
        </div>
      </div>
    </div>
  );
}
