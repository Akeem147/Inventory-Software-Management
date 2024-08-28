'use client'
import { Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
    const pathName = usePathname()
    
  const navLinks = [
    {
      title: "Activities",
      href: "/dashboard/home/overview",
    },

    {
      title: "GettingStarted",
      href: "/dashboard/home/getting-started",
    },

    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },

    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];

  return (
    <div className="h-[128px] p-5 bg-slate-50 border-b border-slate-300">
      <div className="flex space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-white ">
          <Building2 />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-slate-700">Hello Npg, Developer.</p>
          <span className="text-sm">Ak npg</span>
        </div>
      </div>

      <nav className="sticky mt-6 py-3 flex space-x-4">
       {
        navLinks.map((item, i) => (
            <Link className={`${pathName === item.href? "py-[1px] border-b-2 border-slate-500" : "py-[1px]"}`} key={i} href={item.href}>
               {item.title}
            </Link>
        ))
       }
      </nav>
    </div>
  );
}
