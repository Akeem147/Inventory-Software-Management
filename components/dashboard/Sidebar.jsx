import {
  BaggageClaim,
  BarChart4,
  ChevronLeft,
  Files,
  Home,
  LucideCable,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-slate-800 text-slate-50 fixed w-60">
      <div className="flex flex-col">
        <Link
          href="#"
          className="flex space-x-2 items-center bg-slate-950 py-3 px-2"
        >
          <ShoppingCart />
          <span className="font-semibold text-xl">Inventory</span>
        </Link>

        <nav className="flex flex-col gap-3 px-3 py-4">
          <Link
            className="flex items-center gap-1 bg-slate-500 p-2 text-slate-50 rounded-md"
            href="#"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>

          <button className="flex items-center gap-1 p-2">
            <BaggageClaim className="w-5 h-5" />
            <span>Inventory</span>
          </button>

          <button className="flex items-center gap-1 p-2">
            <ShoppingBasket className="w-5 h-5" />
            <span>Sales</span>
          </button>

          <button className="flex items-center gap-1 p-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Purchases</span>
          </button>

          <Link href="#" className="flex items-center gap-1 p-2">
            <LucideCable className="w-5 h-5" />
            <span>Integrations</span>
          </Link>

          <Link href="#" className="flex items-center gap-1 p-2">
            <BarChart4 className="w-5 h-5" />
            <span>Reports</span>
          </Link>

          <Link href="#" className="flex items-center gap-1 p-2">
            <Files className="w-5 h-5" />
            <span>Documents</span>
          </Link>
        </nav>

        <SubscriptionCard />

        <div className="flex flex-col justify-end w-full space-x-2 items-center bg-slate-950">
          <button className="flex space-x-2 items-center justify-center p-1">
            <ChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
