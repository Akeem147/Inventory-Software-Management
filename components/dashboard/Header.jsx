import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import SearchInputs from "./SearchInputs";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-slate-100 flex items-center justify-between px-8 h-12 border-b border-slate-200 shadow-sm">
      <div className="flex gap-3">
        <button>
          <History className="w-5 h-5" />
        </button>
        <SearchInputs />
      </div>

      <div className="flex items-center gap-3">
        <div className="border border-r border-gray-300 pr-2">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 w-5 h-5 " />
          </button>
        </div>

        <div className="flex border-r border-gray-300 space-x-2">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="text-slate-900 w-5 h-5 " />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-900 w-5 h-5 " />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-900 w-5 h-5 " />
          </button>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="w-4 h-5" />
          </button>

          <button>
            <Image
              className="rounded-full w-8 h-8 border border-slate-600"
              src="/hero.jpg"
              alt="user"
              width={98}
              height={96}
            />
          </button>

          <button>
            <LayoutGrid className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
